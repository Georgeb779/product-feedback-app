import { UpVotes } from "@/services/upvotes";
import { useState } from "react";
import { useMutation, useQueryClient, UseMutationResult } from "react-query";
import { toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface useUpVoteProps {
  userId: string;
  productId: string;
  title: string;
}

export const useUpVote = ({ userId, productId, title }: useUpVoteProps) => {
  const upVotesService = new UpVotes();
  const queryClient = useQueryClient();
  const [disableVote, setDisableVote] = useState(false);

  const mutation = useMutation(
    () => upVotesService.updateUpVotes(userId, productId),
    {
      onMutate: () => {
        const toastOptions: ToastOptions = {
          type: "info",
          toastId: title
        };
        toast("Please wait", toastOptions);
        setDisableVote(true);
      },
      onSuccess: () => {
        toast.dismiss(title);
        queryClient.invalidateQueries("Get Suggestions");
        queryClient.invalidateQueries(["Product", productId]);
        const toastOptions: ToastOptions = {
          type: "success",
          toastId: `${title}-success`
        };
        toast("Voted successfully", toastOptions);
        setDisableVote(false);
      }
    }
  );

  return {
    mutate: mutation.mutate,
    disableVote
  };
};

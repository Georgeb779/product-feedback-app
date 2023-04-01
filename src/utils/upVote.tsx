import { UpVotes } from "@/services/upvotes";
import { SetStateAction } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UpVote = (
  userId: string,
  productId: string,
  title: string,
  setDisableVote: {
    (value: SetStateAction<boolean>): void;
    (arg0: boolean): void;
  }
) => {
  const upVotesService = new UpVotes();
  const queryClient = useQueryClient();

  return useMutation(() => upVotesService.updateUpVotes(userId, productId), {
    onMutate: () => {
      toast("Please wait", {
        type: "info",
        toastId: title
      });
      setDisableVote(true);
    },
    onSuccess: () => {
      toast.dismiss(title);
      queryClient.invalidateQueries("Get Suggestions");
      queryClient.invalidateQueries(["Product", productId]);
      toast("Voted successfully", {
        type: "success",
        toastId: `${title}-success`
      });
      setDisableVote(false);
    }
  });
};

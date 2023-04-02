import { useSession } from "next-auth/react";
import { Comments } from "@/services";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

export const useCreateComment = (productId: string, setComment: () => void) => {
  const { data: session } = useSession();
  const CommentsService = new Comments();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(
    (comment: string) =>
      CommentsService.createComment(comment, session?.user.id, productId),
    {
      onMutate: () => {
        toast("Creating comment", {
          type: "info"
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries(["Get Comments By ID", productId]);
        toast("Comment created", {
          type: "success"
        });
        setComment();
      },
      onError: () => {
        toast.error("Failed to send comment");
      }
    }
  );

  return { mutate, isLoading };
};

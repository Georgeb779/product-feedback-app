export const handleSubmitComment = ({
  comment,
  setError,
  createComment
}: {
  comment: string;
  setError: (error: boolean) => void;
  createComment: {
    isLoading: boolean;
    mutate: (comment: string) => void;
  };
}) => {
  if (comment.length === 0) {
    setError(true);
    return;
  }
  if (createComment.isLoading) {
    return;
  }
  createComment.mutate(comment);
};

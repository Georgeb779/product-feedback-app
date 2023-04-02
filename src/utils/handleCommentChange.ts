export const handleCommentChange = (
  e: React.ChangeEvent<HTMLTextAreaElement>,
  limitCommentsCharacter: (value: string) => void,
  setError: (error: boolean) => void
) => {
  limitCommentsCharacter(e.target.value);
  if (e.target.value.length > 0) {
    setError(false);
  }
};

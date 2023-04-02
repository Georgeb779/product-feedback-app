import { useEffect, useState } from "react";

export const useCommentState = (initialLimit: number) => {
  
  const [comment, setComment] = useState("");
  const [characterLimit, setCharacterLimit] = useState(initialLimit);

  const limitCommentsCharacter = (comment: string) => {
    setComment(comment.slice(0, initialLimit));
  };

  useEffect(() => {
    setCharacterLimit(initialLimit - comment.length);

    if (comment[0] === " ") {
      setComment(comment.slice(1));
    }
  }, [comment, initialLimit]);

  return {
    comment,
    characterLimit,
    limitCommentsCharacter,
    setComment
  };
};

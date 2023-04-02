import React, { useState } from "react";
import style from "./AddComment.module.scss";
import { Button } from "../Button";
import { useCommentState, useCreateComment } from "@/hooks";
import { handleCommentChange, handleSubmitComment } from "@/utils";

interface AddCommentProps {
  productId: string;
}

export const AddComment = ({ productId }: AddCommentProps) => {
  const [error, setError] = useState<boolean>(false);

  const { comment, characterLimit, limitCommentsCharacter, setComment } =
    useCommentState(250);

  const createComment = useCreateComment(productId, () => setComment(""));

  return (
    <section className={style.add_comment__container} aria-label='Add Comment'>
      <h2>Add Comment</h2>
      <div className={style.add_comment__textarea_container}>
        <textarea
          className={`${error ? style.error : ""}`}
          name='comment-textarea'
          id='comment-textarea'
          placeholder='Type your comment here'
          value={comment}
          onChange={(e) =>
            handleCommentChange(e, limitCommentsCharacter, setError)
          }
        />
        {error && (
          <span className={`${style.error_message} ${style.active}`}>
            Can&apos;t be empty
          </span>
        )}
        <div className={style.add_comment__submit_container}>
          <span>{characterLimit} Characters left </span>
          <Button
            text='Post Comment'
            onClick={() =>
              handleSubmitComment({ comment, createComment, setError })
            }
            type='primary'
          />
        </div>
      </div>
    </section>
  );
};

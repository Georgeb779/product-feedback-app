import React from "react";
import style from "./AddComment.module.scss";
import { Button } from "../Button";

export const AddComment = () => {
  return (
    <section className={style.add_comment__container} aria-label='Add Comment'>
      <h2>Add Comment</h2>
      <div className={style.add_comment__textarea_container}>
        <textarea
          name='comment-textarea'
          id='comment-textarea'
          placeholder='Type your comment here'
        ></textarea>
        <div className={style.add_comment__submit_container}>
          <span>250 Characters left </span>
          <Button
            text={"Post Comment"}
            onClick={() => {
              console.log("click");
            }}
            type={"primary"}
          />
        </div>
      </div>
    </section>
  );
};

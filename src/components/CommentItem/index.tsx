import React from "react";
import style from "./CommentItem.module.scss";

interface Reply {
  [x: string]: any;
  id: string;
  image: string;
  name: string;
  username: string;
  content: string;
}

interface CommentItemProps {
  image: string;
  name: string;
  username: string;
  content: string;
  replies: Reply[];
}

export const CommentItem: React.FC<CommentItemProps> = ({
  image,
  name,
  username,
  content,
  replies
}) => {

  return (
    <div className={style.comment_item__container}>
      <article>
        <header>
          <img src={image} alt='User Image' />
          <div>
            <h2>{name}</h2>
            <p>@{username}</p>
          </div>
          <button>Reply</button>
        </header>
        <div className={style.comment_item_content__container}>
          <p>{content}</p>
        </div>
      </article>
      {replies && replies.length > 0 && (
        <ul className={style.comment_item_reply__container}>
          {replies.map((reply) => (
            <li key={reply.id}>
              <article>
                <header>
                  <img src={reply.user.image} alt='User Image' />
                  <div>
                    <h2>{reply.user.name}</h2>
                    <p>@{reply.user.username}</p>
                  </div>
                  <button>Reply</button>
                </header>
                <div className={style.comment_item_content__container}>
                  <p>
                    <span>@{reply.replied_to_user.username}</span>{" "}
                    {reply.content}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

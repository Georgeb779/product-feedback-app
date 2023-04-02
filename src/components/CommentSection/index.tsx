import { Comments } from "@/services";
import { countCommentAndReplies } from "@/utils";
import React from "react";
import { useQuery } from "react-query";
import { CommentItem } from "../CommentItem";
import style from "./CommentSection.module.scss";

export const CommentSection = ({ id }: { id: string }) => {
  const commentService = new Comments();

  const { data, isLoading, error } = useQuery(
    ["Get Comments By ID", id],
    async () => await commentService.getCommentByID(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.comment_section__container}>
      <h2>{data && countCommentAndReplies(data)} Comments</h2>
      <ul>
        {data &&
          data.map(
            (comment: {
              id: string;
              user: {
                image: string;
                name: string;
                username: string;
              };
              content: string;
              replies: any[];
            }) => (
              <li key={comment.id}>
                <CommentItem
                  image={comment.user.image}
                  name={comment.user.name}
                  username={comment.user.username}
                  content={comment.content}
                  replies={comment.replies}
                />
              </li>
            )
          )}
      </ul>
    </div>
  );
};

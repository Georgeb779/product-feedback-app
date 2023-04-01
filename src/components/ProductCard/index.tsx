import React, { useState } from "react";
import style from "./ProductCard.module.scss";
import { useSession } from "next-auth/react";
import { Arrow, CommentIcon } from "@/assets/icons";
import { UpVote } from "@/utils/upVote";
import { ProductCardInterface } from "@/interfaces";
import Link from "next/link";
import { countCommentAndReplies } from "@/utils";

export const ProductCard = ({
  id,
  title,
  description,
  category,
  upVotes,
  comments,
  urlIsActive = false
}: ProductCardInterface) => {
  const { data: session } = useSession();

  const [disableVote, setDisableVote] = useState(false);

  const mutation = UpVote(session?.user?.id, id, title, setDisableVote);

  return (
    <div
      className={style.product_card__container}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          console.log("click");
        }
      }}
    >
      <h2>
        {urlIsActive ? <Link href={`/feedback/${id}`}>{title}</Link> : title}
      </h2>
      <p>{description}</p>
      <span className={style.product_card_tag__container}>{category}</span>
      <div className={style.product_card_feedback__container}>
        <span
          className={style.product_card_vote__container}
          onClick={() => {
            if (disableVote) return;
            mutation.mutate();
          }}
        >
          <i>
            <Arrow />
          </i>
          {upVotes}
        </span>
        <span className={style.product_card_comment__container}>
          <i>
            <CommentIcon />
          </i>
          {countCommentAndReplies(comments)}
        </span>
      </div>
    </div>
  );
};

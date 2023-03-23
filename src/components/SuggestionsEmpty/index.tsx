import React from "react";
import style from "./SuggestionsEmpty.module.scss";
import { SuggestionsEmptyIcon } from "@/assets/icons";
import { Button } from "..";

export const SuggestionsEmpty = () => {
  return (
    <div className={style.suggestions_empty__container}>
      <SuggestionsEmptyIcon />
      <h2 className={style.suggestions_empty__container__title}>
        There is no feedback yet.
      </h2>
      <p className={style.suggestions_empty__container__text}>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button
        text={"+ Add Feedback"}
        onClick={() => {
          console.log("click");
        }}
        type={"primary"}
      />
    </div>
  );
};

import React from "react";
import style from "./DropDown.module.scss";

export const DropDown = () => {
  return (
    <div className={style.dropdown__container}>
      <h2>Sort by: <span>Most Upvotes</span> </h2>
      <button type='button'>+ Add Feedback</button>
    </div>
  );
};

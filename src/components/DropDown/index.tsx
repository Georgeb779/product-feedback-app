import React from "react";
import { Button } from "../Button";
import style from "./DropDown.module.scss";

export const DropDown = () => {
  return (
    <div className={style.dropdown__container}>
      <h2>
        Sort by: <span>Most Upvotes</span>{" "}
      </h2>
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

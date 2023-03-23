import React from "react";
import style from "./Button.module.scss";

export const Button = ({ text, onClick, type }) => {
  return (
    <button className={`${style.btn} ${style[type]}`} onClick={() => onClick()}>
      {text}
    </button>
  );
};

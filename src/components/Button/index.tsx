import React from "react";
import style from "./Button.module.scss";

export const Button = ({
  text,
  onClick,
  type,
  arialabel,
  icon
}: {
  text: string;
  onClick: () => void;
  type: "primary" | "secondary" | "edit" | "back";
  arialabel?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <button
      aria-label={arialabel}
      className={`${style.btn} ${style[type]}`}
      onClick={() => onClick()}
    >
      {icon}
      {text}
    </button>
  );
};

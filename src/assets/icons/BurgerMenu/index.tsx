import React from "react";
import style from "./BurgerMenu.module.scss";

export const BurgerMenu = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg
      width='20'
      height='17'
      viewBox='0 0 20 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='Group 3'>
        <rect
          className={`${style.rectangle_a}  ${isOpen ? style.active : ""}`}
          id='Rectangle'
          width='20'
          height='3'
          fill='white'
        />
        <rect
          className={`${style.rectangle_b}  ${isOpen ? style.active : ""}`}
          id='Rectangle Copy'
          y='7'
          width='20'
          height='3'
          fill='white'
        />
        <rect
          className={`${style.rectangle_c}  ${isOpen ? style.active : ""}`}
          id='Rectangle Copy 2'
          y='14'
          width='20'
          height='3'
          fill='white'
        />
      </g>
    </svg>
  );
};

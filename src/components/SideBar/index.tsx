import Link from "next/link";
import React from "react";
import style from "./SideBar.module.scss";

export const SideBar = ({
  isOpen,
  setIsOpen,
  statusCount
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  statusCount: { value: string; count: number }[];
}) => {
  
  const listOfCategory = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <aside
      className={`${style.sidebar__container} ${isOpen ? style.active : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className={`${style.sidebar_content__container} ${
          isOpen ? style.active : ""
        }`}
      >
        <nav className={style.category__container}>
          <ul>
            {listOfCategory.map((category) => (
              <li key={category}>
                <button type='button'>{category}</button>
              </li>
            ))}
          </ul>
        </nav>
        <section className={style.status__container}>
          <h2>
            Roadmap
            <span>
              <Link href='/roadmap'>View</Link>
            </span>
          </h2>
          <ul>
            {statusCount &&
              statusCount.map((status, index) => (
                <li key={index}>
                  <span>{status.value}</span>
                  <p className='status-count'>{status.count}</p>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </aside>
  );
};

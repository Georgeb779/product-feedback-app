import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { Product } from "@/services";
import { BurgerMenu } from "@/assets/icons";

import style from "./NavBar.module.scss";
import { SideBar } from "..";
import { countStatus } from "@/utils/countStatus";
import { handleOpenSideBard } from "@/utils";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const product = new Product();

  const { isLoading, error, data } = useQuery(
    "productFeedback",
    product.getProducts
  );

  if (isLoading) return <>Loading...</>;

  // if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <header className={style.navbar__container}>
        <h1>
          <span>Frontend Mentor</span>
          <span>Feedback Board</span>
        </h1>
        <button
          onClick={() => {
            handleOpenSideBard(isOpen, setIsOpen);
          }}
          type='button'
        >
          <BurgerMenu isOpen={isOpen} />
        </button>
      </header>
      <SideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        statusCount={data && countStatus(data)}
      />
    </>
  );
};

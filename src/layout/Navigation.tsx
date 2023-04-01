import { DropDown, NavBar } from "@/components";
import React from "react";

export const Navigation = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <DropDown />
      {children}
    </>
  );
};

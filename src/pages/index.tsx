import React from "react";
import { signIn } from "next-auth/react";

// import { signOut, useSession } from "next-auth/react";
import { DropDown, NavBar, DashBoardSuggestions } from "@/components";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <NavBar />
      <DropDown />
      <DashBoardSuggestions />
      <ToastContainer position='top-right' autoClose={2500} />
    </>
  );
}

Home.auth = true;

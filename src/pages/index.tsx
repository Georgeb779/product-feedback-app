import React from "react";
import { signIn } from "next-auth/react";

// import { signOut, useSession } from "next-auth/react";
import { DropDown, NavBar, DashBoardSuggestions } from "@/components";
import { Navigation } from "@/layout/Navigation";

export default function Home() {
  return (
    <>
      <Navigation>
        <DashBoardSuggestions />
      </Navigation>
    </>
  );
}

Home.auth = true;

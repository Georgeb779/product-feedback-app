import React from "react";
import { signIn } from "next-auth/react";

import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      {session && session.user && session.user.name && (
        <div>
          {session.user && session.user.name}
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      )}
    </>
  );
}

Home.auth = true;

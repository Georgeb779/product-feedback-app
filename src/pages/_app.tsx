import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import React, { ReactNode } from "react";
import { Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

interface AppPropsWithSession extends AppProps {
  pageProps: {
    session: Session | null;
  };
  Component: React.ComponentType<any> & {
    auth?: boolean;
  };
}
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithSession) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={pageProps.session}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </SessionProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

interface AuthProps {
  children: ReactNode;
}

function Auth({ children }: AuthProps) {
  const { data: session, status } = useSession();

  React.useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "authenticated") {
    return <>{children}</>;
  }
  return <>Loading...</>;
}

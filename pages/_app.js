import "@/styles/globals.scss";

import Head from "next/head";
import DefaultLayout from "@/layout/defaultLayout";
import { SessionProvider } from "next-auth/react"

export default function App({ 
  Component,
  pageProps: { session, ...pageProps }, 
}) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return getLayout(
    <SessionProvider session={session}>
    <>
      <Head>
        <title>翔宇窗飾</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
    </SessionProvider>
  );
}

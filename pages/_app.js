import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
   return (
      <SessionProvider session={session}>
         <Layout>
            <Head>
               <title>Uber</title>
               <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
               />
            </Head>

            <Component {...pageProps} />
         </Layout>
      </SessionProvider>
   );
}

export default MyApp;

import Head from "next/head";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import Navbar from "../comps/Navbar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Navbar />
            <Component {...pageProps} />;
        </>
    );
}

export default MyApp;

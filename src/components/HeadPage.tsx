import Head from "next/head";
import { tTitlePage } from "../typing/types";

const HeadPage = ({titlePage}:tTitlePage) => {
    return(
        <Head>
            <title>{titlePage}</title>
            <meta name="description" content="layouts"/>
            <meta name="keywords" content="layouts"/>
            <meta name="author" content="Samuel Claudino"/>
            <meta name="copyright" content="Samuel Claudino 2021"/>
            <meta name="theme-color" content="white"/>
        </Head>
    )
}

export default HeadPage;
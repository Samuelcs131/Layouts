import Head from "next/head";
import Content from "../components/layoutTwo/content/Content";
import { ContainerLayoutTwo } from "../components/layoutTwo/LayoutTwo-style";
import Menu from "../components/layoutTwo/menu/Menu";

const LayoutTwo = () => {
    return(<>
        <Head><title>LayoutTwo</title></Head>
       <ContainerLayoutTwo>
            <Menu/>
            <Content/>
       </ContainerLayoutTwo>
    </>)
}

export default LayoutTwo;
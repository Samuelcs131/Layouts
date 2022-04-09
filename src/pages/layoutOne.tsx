import Head from "next/head";
import Menu from "../components/layoutOne/menu/Menu"; 
import SectionMain from "../components/layoutOne/section-main/SectionMain";
import Section from "../components/layoutOne/section/Section";
import { themeMain } from "../styles/colorsPallet";

const layoutOne = () => {
    return(<>
        <Head><title>Layout - One</title></Head>
        <Menu/>
        <SectionMain/>
        <Section id={'section-1'} colorBackground={themeMain.Malibu}/>
        <Section id={'section-2'} colorBackground={themeMain.TickleMePink}/>
        <Section id={'section-3'} colorBackground={themeMain.Malibu}/>
        <Section id={'section-4'} colorBackground={themeMain.TickleMePink}/>
    </>)
}

export default layoutOne;
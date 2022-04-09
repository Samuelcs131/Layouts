import styled from "styled-components";
import { themeMain } from "../../../styles/colorsPallet";
import { tColorBgSection } from "../../../typing/types";



export const ContainerSection = styled.section<tColorBgSection>`
    background-color: ${props=>props.colorBg};
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    justify-content: center;

    .container{
        max-width:1140px; margin:0 auto; padding: 100px 50px;
    }

    .content{
        margin-top: 40px;
        width: 120px;
        height: 20px;
        border-radius: 90px;
        background-color: ${themeMain.White};
        position: relative;
    }
`
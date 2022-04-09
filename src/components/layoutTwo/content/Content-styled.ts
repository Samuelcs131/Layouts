import styled from "styled-components";
import { themeMain } from "../../../styles/colorsPallet";

export const ContainerContent = styled.main` 
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    height: 100vh;

    /* HEADER */
    header{ 
        width: 100%;
        height: 65px;
        background-color: ${themeMain.CornflowerBlue};
        flex-shrink: 0;
    }

    /* SECTION */
    section{
        background-color: ${themeMain.RoyalBlue};
        padding: 20px;
        flex-grow: 1;
        overflow-y: auto;
    }

    footer{
        height: 20px;
        width: 100%;
        background-color: red;
        flex-shrink: 0;
    }
    /* RESOLUTION -------------------- */
    @media screen and (max-width: 767px) {
        margin-left: 70px;
    }
`
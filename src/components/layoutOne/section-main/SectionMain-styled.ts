import styled from "styled-components";
import { themeMain } from "../../../styles/colorsPallet";

export const ContainerSectionMain = styled.section`
    background-color: ${themeMain.RoyalBlue};
    height: 100vh;
    width: 100%;
    display: grid;
    place-items: center;

    .container{
        max-width:1140px; margin:0 auto; padding: 100px 50px;
    }

    .content{
        width: 520px;
        height: 30px;
        border-radius: 90px;
        background-color: ${themeMain.White};
        position: relative;
        &::before {
            content: '';
            width: 360px;
            height: 30px;
            background: #fff;
            position: absolute;
            top: -60px;
            left: 50%;
            border-radius: 90px;
            transform: translate(-50%, 0);
        }
        &::after {
            content: '';
            width: 200px;
            height: 30px;
            background: #fff;
            position: absolute;
            left: 50%;
            bottom: -60px;
            border-radius: 90px;
            transform: translate(-50%, 0);
        }
        
    }
`
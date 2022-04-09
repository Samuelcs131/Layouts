import { createGlobalStyle } from 'styled-components';
import { themeMain } from './colorsPallet';

export default createGlobalStyle`

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        border: none;
        text-decoration: none;
        list-style: none;
        font-family: 'Poppins', sans-serif; 
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
        position: relative;
    }

    /* SELECT TEXT */
    ::selection {
        background: rgba(0, 217, 255, 0.411);
        color: white;
    }

    /* SCROLL */
    ::-webkit-scrollbar{
        width: 12px;
    }
    ::-webkit-scrollbar-track{
        background-color: white;
    }

    ::-webkit-scrollbar-thumb{
        background-color:  grey;
        border-radius: 5px;
        border: 2px solid white;
    }

`
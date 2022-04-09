import styled from "styled-components";
import { themeMain } from "../../../styles/colorsPallet";

export const ContainerMenu = styled.div`
    .container-menu{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        width: 90px;
        background-color: ${themeMain.TickleMePink};
        flex-shrink: 0;
        transition-duration: .25s;
        transition-property: width; 
        transition-timing-function: linear;
        align-items: center;
    }

    /* LOGO & MENU */
    .container-logo-and-menu{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px 20px;
        
        /* LOGO MENU */
        .logo-menu{
            display: none;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: ${themeMain.White};
            flex-shrink: 0;
        }
    
        /* ICON MENU */
        .icon-menu {
            background-color: ${themeMain.CornflowerBlue};
            height: 45px;
            width: 45px;
            border-radius: 50%;
            display: grid;
            place-items: center;
            cursor: pointer;
            transition-duration: .3s;
            transition-property: width;
            transition-delay: .1s;
            flex-shrink: 0;

            .line {
                width: 25px;
                height: 2px;
                background-color: #fff;
                margin: 5px;
                transition: 0.3s;
                border-radius: 10px;
            }
        }
    }

    /* MENU LIST */
    .container-menu-list{
        padding: 10px 25px;
        height: 100%;
        overflow-x: auto;
        .menu-list{

            margin-top: 10px;
            li{
                margin-bottom: 20px;
                a{
                    user-select: none;
                    display: flex;
                    align-items: center;
                    gap: 15px;

                    svg{
                        stroke: white;
                        flex-shrink: 0;
                    }

                    span{
                        color: ${themeMain.White};
                        font-size: 18px;
                        display: none;
                    }
                }
            }
        }
    }

    /* FOOTER */
    .menu-footer{
        padding: 10px;
        color: ${themeMain.White};
        text-align: center;
        font-size: 14px;
        display: none;
    }

    /* MENU ACTIVE -------------------- */
    .container-menu.active{
        width: 300px;
        align-items: initial;
 
        /* LOGO AND MENU */
        .container-logo-and-menu{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 10px 20px;
        
            /* LOGO MENU */
            .logo-menu{
                display: block; 
            }
        }

        /* ICON MENU */
        .icon-menu{
            .l-1{ transform: rotate(-45deg) translate(1px, 4px); width: 15px;}
            .l-2{ opacity: 0; }
            .l-3{ transform: rotate(45deg) translate(1px, -4px); width: 15px;}
        }

        /* MENU LIST */
        .container-menu-list{ 
            .menu-list{
                li{ 
                    a{ 
                        span{
                            display: block;
                        }
                    }
                }
            }
        }

        /* FOOTER */
        .menu-footer{ 
            display: block;
        }
    }
    /* RESOLUTION -------------------- */
    @media screen and (max-width: 767px) {
        .container-menu{
            width: 70px;
            position: absolute;
        }
        .container-menu.active{
            position: absolute;
        }
    }
`
/* 

.container-menu{
            width: 0; 
        }
        MENU ACTIVE 
        .container-menu.active{
            width: 0; 
            .container-logo-and-menu{
                .icon-menu{
                    display: none;
                }
            }
        }

*/
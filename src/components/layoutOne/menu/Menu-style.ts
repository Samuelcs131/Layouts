import styled from "styled-components";
import { themeMain } from "../../../styles/colorsPallet";

export const ContainerMenu = styled.header`
    background-color: ${themeMain.PictonBlue};
    width: 100%;
    height: 10vh;
    z-index: 1000;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width:1140px; margin:0 auto; padding:0 50px;
        width: 100%;

        /* MENU LOGO */
        .container-menu-logo a{
            display: flex;
            align-items: center;
            gap: 20px;
            .menu-logo{
                height: 55px;
                width: 55px;
                border-radius: 50%;
                background-color: white;
            }
            .menu-logo-text{
                height: 20px;
                width: 120px;
                background-color: white;
                border-radius: 90px;
            }
        }
        /* MENU LIST */
        .container-menu-list{

            .menu-list{
                display: flex;
                gap: 20px;
                
                transform: translateX(0);
                a{
                    height: 20px;
                    width: 80px;
                    background-color: white;
                    display: block;
                    border-radius: 90px;
                }
                
            }

            /* ICON MENU */
            .icon-menu {
                background-color: ${themeMain.CornflowerBlue};
                height: 45px;
                width: 45px;
                border-radius: 50%;
                display: none;
                place-items: center;
                cursor: pointer;
                    .line {
                        width: 25px;
                        height: 2px;
                        background-color: #fff;
                        margin: 5px;
                        transition: 0.3s;
                    }
            }
            
        }

        /* ACTIVE MENU LIST */
        .container-menu-list.active{
            /* ACTIVE MENU */
            .icon-menu{
                .l-1{ transform: rotate(-45deg) translate(-5px, 5px); }
                .l-2{ opacity: 0; }
                .l-3{ transform: rotate(45deg) translate(-5px, -5px); }
            }
        }

        /* RESOLUTION */
        @media screen and (max-width: 767px) {
            /* MENU LOGO */
            .container-menu-logo a{
                .menu-logo-text{
                    display: none; 
                }
        } 
            /* MENU LIST */
            .container-menu-list{
                .menu-list{
                    position: fixed;
                    transform: translateX(100%);
                    width: 100%;
                    height: 90vh;
                    top: 10vh;
                    right: 0;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-direction: column; 
                    transition: all .4s ease-in;
                    
                    li{
                        opacity: 0;
                    }
                }
                .icon-menu {
                    display: grid; 
                }
            }
            /* ACTIVE MENU LIST */
            .container-menu-list.active{
                .menu-list{
                    background-color: blueviolet; 
                    transform: translateX(0%);
                    
                    li{
                        animation: 0.5s ease 0.442857s 1 normal forwards running navLinkFade;
                    }
                }
            }
        }
}

/* ANIMATION */
@keyframes navLinkFade {
        from{
            opacity: 0;
            transform: translateX(50px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
`
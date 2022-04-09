import Link from "next/link";
import { useRef } from "react";
import { ContainerMenu } from "./Menu-style";

const Menu = () => {
    const iconMenu = useRef<HTMLDivElement>(null)
    const listMenu = useRef<HTMLUListElement>(null)

    function closeMenu(){
        let listMenuArray:number = listMenu.current?.children.length || 0
        
        // CLOSE MENU
        for(let num = 0; num < listMenuArray; num++){
             listMenu.current?.children[num].addEventListener('click', () => {
                // CLOSE MENU
                iconMenu.current?.classList.remove('active');
            })
        }
    }

    function activeMenu(){
        iconMenu.current?.classList.toggle('active')
    }

    return(
        <ContainerMenu>
            <div className="container">
                <div className="container-menu-logo">
                    <Link href="/layoutOne">
                    <a>
                        <div className="menu-logo"></div>
                        <div className="menu-logo-text"></div>
                    </a>
                    </Link>
                </div>

                <nav className="container-menu-list" ref={iconMenu}>
                    <ul className="menu-list" ref={listMenu}>
                        <li><Link href="#section-1"><a onClick={()=>closeMenu()}></a></Link></li>
                        <li><Link href="#section-2"><a onClick={()=>closeMenu()}></a></Link></li>
                        <li><Link href="#section-3"><a onClick={()=>closeMenu()}></a></Link></li>
                        <li><Link href="#section-4"><a onClick={()=>closeMenu()}></a></Link></li>
                    </ul>

                    <div className="icon-menu" onClick={()=>activeMenu()}>
                         <div>
                            <div className="line l-1"></div>
                            <div className="line l-2"></div>
                            <div className="line l-3"></div>
                         </div>
                    </div>
                </nav>
            </div>
        </ContainerMenu>
    )
}

export default Menu;
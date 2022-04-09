import GlobalStyle from "../styles/globalStyle";
import { tChildrenProps } from "../typing/types"

const Layout = ({children}: tChildrenProps) => {
    return(
        <>
        <GlobalStyle/>
            {children}
        </>
    )
}

export default Layout;
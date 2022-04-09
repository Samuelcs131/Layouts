import HeadPage from "../components/HeadPage";
import Content from "../components/layoutTwo/content/Content";
import { ContainerLayoutTwo } from "../components/layoutTwo/LayoutTwo-style";
import Menu from "../components/layoutTwo/menu/Menu";

const LayoutTwo = () => {
    return(<>
       <HeadPage titlePage="LayoutTwo"/>
       <ContainerLayoutTwo>
            <Menu/>
            <Content/>
       </ContainerLayoutTwo>
    </>)
}

export default LayoutTwo;
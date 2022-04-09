import { ContainerSection } from "./Section-styled";

type tSectionProps = {
    colorBackground: string
    id: string,
}

const Section = ({colorBackground,id}:tSectionProps) => {
    return(<>
        <ContainerSection id={id} colorBg={colorBackground}> 
            <div className="container">
                <div className="content"></div>
            </div>
        </ContainerSection>
    </>)
}

export default Section;
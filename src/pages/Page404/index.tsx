import { FC } from 'react';
import { GiNinjaHeroicStance } from "react-icons/gi";
const Page404: FC = () => {
    return (
        <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "fontFamily": "Axiforma ", "zIndex": "100" }}>
            <h1>Page 404</h1>
            <GiNinjaHeroicStance style={{ "fontSize": "100px" }} />
            <p>Não há nada por aqui ainda, mas estamos trabalhando nisto</p>
        </div>
    )
}

export default Page404
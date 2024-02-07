import { FC } from 'react';
import { GiNinjaHeroicStance } from "react-icons/gi";
const Page404: FC = () => {
    return (
        <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "center", "flexDirection": "column", "fontFamily": "Axiforma " }}>
            <h1>Page 404</h1>
            <GiNinjaHeroicStance style={{ "fontSize": "100px" }} />
            <p>Não há por aqui ainda, mas estamos trabalhando nisto</p>
        </div>
    )
}

export default Page404
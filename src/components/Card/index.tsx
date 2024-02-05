import { FC } from 'react';
import { Container } from './style';
import generic from "../../assets/imgs/generic.png"

interface cardItem {
    name: string,
    description: string;
    img: string;
}

interface CardProps {
    item: cardItem;
}
const Card: FC<CardProps> = ({ item }) => {
    return (
        <Container url={item.img !== "" ? item.img : generic}>
            <div>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p className='details'>ver detalhes</p>
            </div>
        </Container>
    )
}
export default Card
import { FC, useState } from 'react';
import { Container } from './style';
import { IoCloseCircleOutline } from "react-icons/io5";
import Star from '../Stars';
interface cardItem {
    name: string,
    description: string;
    img: string;
    appearances?: string[];
    rating: number;
}

interface CardProps {
    item: cardItem;
}


const Card: FC<CardProps> = ({ item }) => {
    const [details, setOpenDetalis] = useState(false)

    const openDetails = () => {
        setOpenDetalis(prevState => !prevState)
        console.log(details)
    }
    return (
        <Container type={details ? "opened" : "close"}>
            <div>
                <img src={item.img} />
            </div>

            <div className='footer-card'>

                <div>
                    <p className='footer-name'>{item.name}</p>
                    {details ?
                        (<div className='appearances'>
                            <h1 className='title-appearances'>Aparacições</h1>
                            <ul className='list-appearances'>
                                {item.appearances?.map((apareces, index) => <li key={index}>{apareces}</li>)}
                            </ul>
                        </div>
                        ) : <p className='footer-description'>{item.description}</p>
                    }
                    {details && (
                        <div className='rating-fans'>
                            <h1 className='rating-fans-title'>Avaliação dos fãs</h1>
                            <div className='stars'>
                                {[...Array(5)].map((_, index) => (
                                    <Star key={index} filled={index < item?.rating} />
                                ))}
                            </div>
                        </div>
                    )}
                    <p className='footer-details' onClick={openDetails}>
                        {details ? <IoCloseCircleOutline /> : "Ver detalhes"}
                    </p>
                </div>
            </div>
        </Container>
    )
}
export default Card
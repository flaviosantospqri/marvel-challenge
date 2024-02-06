import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { Container } from './style';
import { Gallery } from '../../components';
interface Characters {
    id: number;
    description: string;
    name: string;
    img: string;
    appearances: string[];
    rating: number;
}
const Comics: FC = () => {
    const [characters, setCharacters] = useState<Characters[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/comics");
                const charactersData: Characters[] = response.data
                setCharacters(charactersData);


            } catch (error) {
                console.error('Error fetching characters:', error);

            }
        }
        fetchData()
    }, [])
    return (
        <Container>
            <Gallery listItens={characters} />
        </Container>
    )
}
export default Comics
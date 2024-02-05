import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import { SvgComponent } from '../../components';
import { Container } from './style';

interface Characters {
    id: number;
    description: string;
    name: string;
    img: string;
    appearances: string[];
    rating: number;
}
const Characters: FC = () => {
    const [characters, setCharacters] = useState<Characters[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/characters");
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
            <ul>
                {characters.map((character) => (
                    <li key={character.id}>
                        <SvgComponent url={character.img} alt="" />
                    </li>
                ))}
            </ul>
        </Container>
    )
}
export default Characters
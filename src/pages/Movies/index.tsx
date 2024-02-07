import { FC, useEffect, useState } from 'react';
import { Container } from './style';
import { Gallery } from '../../components';
import axios from 'axios';

interface Characters {
    id: number;
    description: string;
    name: string;
    img: string;
    appearances: string[];
    rating: number;
}

const Movies: FC = () => {
    const [characters, setCharacters] = useState<Characters[]>([]);
    const [sortBy, setSortBy] = useState<string>('lançamento'); // Estado para armazenar o tipo de ordenação

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/movies");
                const charactersData: Characters[] = response.data;
                setCharacters(charactersData);
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };
        fetchData();
    }, []);
    const sortCharacters = (characters: Characters[], sortBy: string): Characters[] => {
        if (sortBy === 'lançamento') {
            return [...characters].sort((a, b) => a.id - b.id);
        } else if (sortBy === 'cronologia') {
            return [...characters].sort((a, b) => a.name.localeCompare(b.name));
        }
        return characters;
    };

    const sortedCharacters = sortCharacters(characters, sortBy);

    return (
        <Container>
            <div className='selection'>
                <label htmlFor="sort">Ordenar por:</label>
                <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="lançamento">Lançamento</option>
                    <option value="cronologia">Cronologia</option>
                </select>
            </div>
            <Gallery listItens={sortedCharacters} />
        </Container>
    );
};

export default Movies;

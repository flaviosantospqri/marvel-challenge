import { FC } from 'react';
import { Logo } from '..';
import { Container } from './style';
import { Link } from 'react-router-dom';

interface MenuObject {
    id: number,
    name: string,
    route: string
}
interface MenuItensComponents {
    itens: MenuObject[];
}

const Header: FC<MenuItensComponents> = ({ itens }) => {
    return (
        <Container>
            <div className='logo'>
                <Logo size='md' />
            </div>
            <ul>
                {itens.map((item) => (
                    <Link to={item.route} >
                        {item.name !== "Sair" ? <li key={item.id}>
                            {item.name}
                        </li> : <li key={item.id} className='content-avatar'><span className='avatar'></span>{item.name}</li>}

                    </Link>
                ))}
            </ul>
        </Container>
    );
};

export default Header;
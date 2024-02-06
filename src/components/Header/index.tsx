import { FC, useEffect } from 'react';
import { Logo } from '..';
import { Container } from './style';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logOut } from '../../store/authSlice';

interface MenuObject {
    id: number,
    name: string,
    route: string
}
interface MenuItensComponents {
    itens: MenuObject[];
}

const Header: FC<MenuItensComponents> = ({ itens }) => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const signOut = () => {
        dispatch(logOut())
    }
    useEffect(() => {
        console.log(auth.status)
    }, [auth])

    return (
        <Container>
            <div className='logo'>
                <Logo size='md' />
            </div>
            <ul>
                {itens.map((item) => (
                    <Link to={item.name === "Sair" && auth.status ? item.route : "/login"} >
                        {item.name !== "Sair" ? <li key={item.id}>
                            {item.name}
                        </li> : <li key={item.id} onClick={signOut} className={auth.status ? 'content-avatar' : "content-avatar-none"}><span className='avatar'></span>{auth.status ? "Sair" : item.name}</li>}

                    </Link>
                ))}
            </ul>
        </Container>
    );
};

export default Header;
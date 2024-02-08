import { FC, useState } from 'react';
import { Logo } from '..';
import { Container } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/config/types';
import { logout } from '../../store/auth/slice';


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
    const [open, setOpenMenu] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signOut = () => {
        dispatch(logout());
        navigate('/login');
    }

    const openMenu = () => {
        setOpenMenu(prevState => !prevState)
    }

    return (
        <Container open={open}>
            <div className='logo'>
                <Logo size='md' />
            </div>
            <span onClick={openMenu} id='collapse-menu' className="material-icons">menu</span>
            <ul>
                {itens.map((item, index) => (
                    <li key={index}>
                        {item.name !== "Sair" ? (
                            <Link to={item.route}>{item.name}</Link>
                        ) : (
                            auth.isAuthenticated ? (
                                <button onClick={signOut} className='content-avatar'>
                                    <span className='avatar'></span>
                                    Sair
                                </button>
                            ) : (
                                <Link className='content-avatar-none' to="/login">Login</Link>
                            )
                        )}
                    </li>
                ))}
            </ul>
        </Container>
    );
};

export default Header;
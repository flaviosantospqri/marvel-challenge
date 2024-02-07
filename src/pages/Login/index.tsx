import { FC, FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components';
import { Container } from './style';
import { Container as ContainerHome } from "../Home/style";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../store/authActions';
import { RootState } from '../../store/types';

interface UserState {
    username: string,
    password: string
    saveLogin?: boolean;
}

const Login: FC = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const [recentAuth, setRecentAuth] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData: UserState = {
            username: e.currentTarget.user.value,
            password: e.currentTarget.password.value,
            saveLogin: e.currentTarget['save-login'].checked,
        };
        dispatch(loginRequest(userData))
    };
    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate("/characters")
        }
    }, [auth])

    return (
        <>
            <ContainerHome />
            <Container>
                <Logo size="md" />
                <div className='container-login'>
                    <div className='header-login-information'>
                        <p className='welcome'> {recentAuth ? "Bem-vindo(a) de volta!" : "Bem vindo(a)"}</p>
                        <p className='make-login'>
                            Acesse sua conta:

                        </p>
                    </div>
                    <div className='container-form'>
                        <form onSubmit={handleSubmit} className='form'>
                            <div className='form-input'>
                                <input type="text" name="user" id="user" placeholder='Usuário' />
                                <input type="password" name="password" id="password" placeholder='Senha' />
                            </div>
                            <div className='form-save-and-forgot'>
                                <div className='check-forgot'>
                                    <input type="checkbox" name="save-login" id="save-login" />
                                    <p>Salvar Login</p>
                                </div>
                                <Link to="/forgot-password">Esqueci a senha</Link>
                            </div>
                            <button type='submit'>Entrar</button>
                        </form>
                        <p>Ainda não tem login? <Link to="/register">Cadastre-se</Link></p>
                    </div>
                </div>
            </Container>
            {/* <Section /> */}

        </>
    )
}

export default Login
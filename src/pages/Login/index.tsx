import { FC, FormEvent, useState } from 'react';
import { Section } from '../Home/style';
import { Link } from 'react-router-dom';
import { Logo } from '../../components';
import { Container } from './style';
import { Container as ContainerHome } from "../Home/style";

const Login: FC = () => {
    const [recentAuth, setRecentAuth] = useState(true)


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userData = {
            user: e.currentTarget.user.value,
            password: e.currentTarget.password.value,
            saveLogin: e.currentTarget['save-login'].checked,
        };

        console.log(userData);
    };
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
                <Section />
            </Container>

        </>
    )
}

export default Login
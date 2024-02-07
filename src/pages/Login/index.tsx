import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components';
import { Container } from './style';
import { Container as ContainerHome } from "../Home/style";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/config/types';
import { loginRequest } from '../../store/auth/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { setInStorage } from '../../store/auth/slice';

interface UserState {
    username: string,
    password: string
    saveLogin?: boolean | null | undefined;
}

const Login: FC = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const userStorage = localStorage.getItem("user");
    const user = userStorage ? JSON.parse(userStorage) : null;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues: UserState = {
        username: user?.username && user.username,
        password: user?.password && user.password,
        saveLogin: false,
    };
    const [userData, setUserData] = useState<UserState>(initialValues)

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Usuário é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
    });

    const handleSubmit = ({ username, password, saveLogin }: UserState) => {
        dispatch(loginRequest({ username, password, saveLogin }));
        setUserData({ username, password, saveLogin })
    };
    useEffect(() => {
        if (auth.isAuthenticated) {
            if (userData.saveLogin) {
                dispatch(setInStorage(userData))
            }
            navigate("/")
        }

    }, [auth])

    return (
        <>
            <ContainerHome />
            <Container>
                <Logo size="md" />
                <div className='container-login'>
                    <div className='header-login-information'>
                        <p className='welcome'> {auth.isAuthenticated ? "Bem-vindo(a) de volta!" : "Bem vindo(a)"}</p>
                        <p className='make-login'>
                            Acesse sua conta:
                        </p>
                    </div>
                    <div className='container-form'>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {() => (
                                <Form className='form'>
                                    <div className='form-input'>
                                        <Field type="text" name="username" id="username" placeholder='Usuário' />
                                        <ErrorMessage name="username" component="div" className="error-message" />
                                        <Field type="password" name="password" id="password" placeholder='Senha' />
                                        <ErrorMessage name="password" component="div" className="error-message" />
                                    </div>
                                    <div className='form-save-and-forgot'>
                                        <div className='check-forgot'>
                                            <label>
                                                <Field type="checkbox" name="saveLogin" />
                                                Salvar Login
                                            </label>
                                        </div>
                                        <Link to="/forgot-password">Esqueci a senha</Link>
                                    </div>
                                    <button type='submit'>Entrar</button>
                                </Form>
                            )}
                        </Formik>
                        <p>Ainda não tem login? <Link to="/register">Cadastre-se</Link></p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login;

import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container as ContainerHome } from "../Home/style";
import { useDispatch } from 'react-redux';
import { signupRequest } from '../../store/auth/actions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container } from './style';

interface UserState {
    email: string,
    username: string,
    password: string,
    saveLogin?: boolean | null | undefined;
}

const SignUp: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialValues: UserState = {
        email: '',
        username: '',
        password: '',
        saveLogin: false,
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Usuário é obrigatório'),
        password: Yup.string().required('Senha é obrigatória'),
    });

    const handleSubmit = async ({ email, username, password, saveLogin }: UserState) => {
        const response = await dispatch(signupRequest({ email, username, password, saveLogin }));

        if (response.payload.username) {
            navigate("/login")
        }


    };

    return (
        <>
            <ContainerHome />
            <Container>
                <div className='container-login'>
                    <div className='content-logo'>
                        <h1>Marvel</h1>
                    </div>
                    <div className='header-login-information'>
                        <p className='welcome'> Acompanhe a maior</p>
                        <p className='make-login'>
                            Crie sua conta:
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
                                        <Field type="email" name="email" id="username" placeholder='Email' />
                                        <ErrorMessage name="email" component="div" className="error-message" />
                                        <Field type="text" name="username" id="username" placeholder='Usuário' />
                                        <ErrorMessage name="username" component="div" className="error-message" />
                                        <Field type="password" name="password" id="password" placeholder='Senha' />
                                        <ErrorMessage name="password" component="div" className="error-message" />
                                    </div>
                                    <button type='submit'>Cadastrar</button>
                                </Form>
                            )}
                        </Formik>
                        <p>Já tem uma conta? <Link to="/login">Faça Login</Link></p>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUp;

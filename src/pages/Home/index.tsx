import { FC } from 'react';
import { Container, Main, Section } from './style';
import { Logo } from '../../components';

const Home: FC = () => {
    return (
        <>
            <Container />
            <Main>
                <Section />
                <Logo size="md" />
            </Main>
        </>
    )
}
export default Home
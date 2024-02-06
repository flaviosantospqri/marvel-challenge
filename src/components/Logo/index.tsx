import { FC } from 'react';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';
interface LogoProps {
    size: string;
}

const Logo: FC<LogoProps> = ({ size }) => {
    const navigate = useNavigate()
    const returnHome = () => {
        navigate("/")
    }
    return (
        <Container size={size} onClick={returnHome}>
            <h1>Marvel</h1>
        </Container>
    )
}
export default Logo
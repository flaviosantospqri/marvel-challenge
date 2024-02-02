import { FC } from 'react';
import { Container } from './style';
interface LogoProps {
    size: string;
}
const Logo: FC<LogoProps> = ({ size }) => {
    return (
        <Container size={size}>
            <h1>Marvel</h1>
        </Container>
    )
}
export default Logo
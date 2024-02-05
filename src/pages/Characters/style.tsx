import styled from "styled-components";

interface StyledComponentProps {
    description?: string;
}

export const Container = styled.div<StyledComponentProps>`
    font-family: var(--secondary-font);
`;

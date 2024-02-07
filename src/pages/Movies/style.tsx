import styled from "styled-components";

interface StyledComponentProps {
    description?: string;
}

export const Container = styled.div<StyledComponentProps>`
font-family: var(--secondary-font);
display: fex: 
flex-direction: column;
align-itens: center;
justify-content: center;
box-sizing: border-box;
position: relative;
.selection {
    margin: 20px;
    border: 1px solid var(--red-color);
    width: 250px;
    color: var(--red-color);  
    position:absolute;
    top: 50px;
    padding: 10px;
    border-radius: 4px;
    select{
        background-color: transparent;
        border: none;
        color: var(--red-color);
        font-size: 22px;
        margin-left: 10px;
        position: absolute;
        user-select: none;
    }
}
`
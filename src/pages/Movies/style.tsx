import styled from "styled-components";

interface StyledComponentProps {
    description?: string;
}

export const Container = styled.div<StyledComponentProps>`
font-family: var(--secondary-font);
flex-direction: column;
box-sizing: border-box;
position: relative;
.selection {
    margin: 20px;
    width: 250px;
    color: var(--red-color);  
    position:absolute;
    top: 50px;
    z-index: 100;
    padding: 10px;
    background-color: transparent;
    border-radius: 4px;
    select{
        background-color: transparent;
        border: none;
        color: var(--red-color);
        font-size: 22px;
        margin-left: 10px;
        position: absolute;
        user-select: none;
        border: 1px solid var(--red-color);
        padding: 8px;
        border-radius: 4px;
    }
    select option{  
        background-color: none;
    }
}
`
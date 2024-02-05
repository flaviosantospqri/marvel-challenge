import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 1200px;
    flex-direction: column;
    height: 500px;
    max-width: 100%;
    overflow: hidden;

    ul {
        display: flex;
        align-items: center;
        padding: 20px;
        justify-content: space-between;
        list-style-type: none;
        flex-wrap: wrap;
        width: 100%;

        li {
            margin: 0px 5px;
            min-height: 300px;
        }
    }
`;

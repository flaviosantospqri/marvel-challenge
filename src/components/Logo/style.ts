import styled from "styled-components";

interface Props {
  size: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 600px;
  width: ${(p: Props) =>
    p.size === "lg" ? "500px" : p.size === "md" ? "200px" : "100px"};
  height: ${(p: Props) =>
    p.size === "lg" ? "120px" : p.size === "md" ? "80px" : "50px"};
  z-index: 20;
  background-color: red;
  border-radius: 4px;
  h1 {
    font-size: 4rem;
    letter-spacing: 8px;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

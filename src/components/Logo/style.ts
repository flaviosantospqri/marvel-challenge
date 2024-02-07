import styled from "styled-components";

interface Props {
  size: string;
}

export const Container = styled.div<Props>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${(p: Props) =>
    p.size === "lg" ? "500px" : p.size === "md" ? "150px" : "100px"};
  height: ${(p: Props) =>
    p.size === "lg" ? "120px" : p.size === "md" ? "65px" : "50px"};
  z-index: 20;
  background-color: red;
  h1 {
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`;

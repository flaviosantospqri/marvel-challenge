import styled from "styled-components";

export const Section = styled.section`
  background: url("/src/assets/imgs/main.png");
  background-size: cover;
  height: 100%;
  width: 50%;
  position: fixed;
  background-size: cover;
  right: 0;
  z-index: -1;
`;
export const Main = styled.main`
  display: flex;
  justify-content: space-between;

  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Div = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 32px;
`;
export const H1 = styled.h1`
  color: #ffffff;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--red-color);
  font-family: var(--primary-font);
  font-weight: 100;
  z-index: 50;
  position: absolute;
  width: 30%;
  height: 12%;
  text-align: center;
  font-size: 15rem;
  letter-spacing: 10px;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  background: var(--default-background);
  opacity: 0.8;
  z-index: 1;
  width: 100%;
  height: 100vh;
  position: absolute;
`;

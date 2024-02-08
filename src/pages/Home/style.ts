import styled, { keyframes } from "styled-components";

export const Section = styled.section`
  background: url("/src/assets/imgs/main.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 50%;
  position: fixed;
  right: 0;
  z-index: -1;
`;
export const Main = styled.main`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
  width: 100%;
  height: 100vh;
  div {
    position: absolute;
    left: 20%;
    transform: translateX(-20%);
  }
`;

export const Container = styled.div`
  background: var(--default-background);
  opacity: 0.8;
  width: 100%;
  height: 100%;
  position: absolute;
`;

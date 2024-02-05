import styled from "styled-components";

interface StyleProps {
  url: string;
}

export const Container = styled.div<StyleProps>`
  background: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  width: 300px;
  height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    box-sizing: border-box;
    bottom: 44px;
    overflow: hidden;
    font-size: 12px;
    height: 200px;
    width: 100%;
    left: -10px;
    background: var(--card-details-background);
    opacity: 0.5;
    border-radius: 30px;
    .details {
      font-size: 18px;
      width: 100%;
      text-align: center;
    }
  }
`;

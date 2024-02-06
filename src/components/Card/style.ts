import styled from "styled-components";

interface StyleProps {
  type: string;
}

export const Container = styled.div<StyleProps>`
  display: ${(props) => (props.type === "opened" ? "flex" : "block")};
  flex-direction: column;
  flex-direction: ${(props) =>
    props.type == "opened" ? "column" : "row-reverse"};
  margin: 50px 20px;
  width: 300px;
  position: relative;
  border-radius: 20px;
  z-index: ${(props) => (props.type == "opened" ? "2" : "0")};
  & > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 455.7px;
    border-radius: 20px;
    img {
      object-fit: contain;
      width: ${(props) => (props.type == "opened" ? "300px" : "cover")};
      height: 100%;
      border-radius: 20px;
    }
  }
  .list-appearances {
    list-style-type: none;
    text-align: left;
    font-size: 18px;
    width: 350px;
    box-sizing: border-box;
    padding: 0;
    margin-top: 0;
  }
  .appearances,
  .rating-fans {
    text-align: left;
  }

  .title-appearances,
  .rating-fans-title {
    margin: 0;
    text-align: left;
    font-size: 22px;
  }
  .footer-card {
    position: absolute;
    align-self: flex-end;
    bottom: 0;
    border-radius: 20px;
    padding: ${(props) => (props.type == "opened" ? "12px" : "8px")};
    padding-left: ${(props) => props.type == "opened" && "120px"};
    height: ${(props) => (props.type == "opened" ? "455.7px" : "230px")};
    flex: 1;
    left: ${(props) => props.type == "opened" && "200px"};
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: ${(props) =>
      props.type === "opened" ? "center" : "auto"};
    text-align: center;
    box-sizing: border-box;
    box-shadow: ${(props) =>
      props.type === "opened" && "10px 10px 12px -11px rgba(0,0,0,0.75);"};
    overflow: hidden;
    z-index: ${(props) => (props.type == "opened" ? "-1" : "0")};
    background: ${(props) =>
      props.type === "opened"
        ? "linear-gradient(to right, rgb(255, 0, 0), rgb(64, 14, 14))"
        : "linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(64, 14, 14, 0.7))"};
    width: ${(props) => (props.type === "opened" ? "500px" : "auto")};
    animation: ${(props) =>
      props.type === "opened"
        ? "slideRight 0.6s ease-out"
        : "slideLeft 0.3s ease-out"};
    .footer-name {
      margin: 0;
      font-size: 22px;
      text-align: ${(props) => (props.type === "opened" ? "left" : "auto")};
      height: 45px;
    }
    .footer-description {
      text-align: justify;
      margin: 20px 0px;
      height: 90px;
    }
    .footer-details {
      margin-bottom: 0;
      position: ${(props) => props.type === "opened" && "absolute"};
      bottom: ${(props) => props.type === "opened" && "10px"};
      right: ${(props) => props.type === "opened" && "10px"};
      font-size: ${(props) => (props.type === "opened" ? "24px" : "18px")};
      cursor: pointer;
    }
  }
  @keyframes slideRight {
    from {
      left: 0;
    }
    to {
      left: 200px;
    }
  }

  @keyframes slideLeft {
    from {
      left: 200px;
    }
    to {
      left: 0;
    }
  }
`;

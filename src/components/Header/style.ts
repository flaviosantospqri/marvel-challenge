import styled from "styled-components";

interface Menu {
  open: boolean;
}

export const Container = styled.header<Menu>`
  display: flex;
  top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  width: 100%;
  height: 100px;
  border-bottom: 2px solid rgba(255, 0, 0, 0.5);
  position: fixed;
  z-index: 999;
  .logo {
    margin-left: 30px;
  }
  @media (max-width: 768px) {
    position: relative;
  }
  li {
    transition: ease-in-out;
    transition-duration: 200ms;
    @media (max-width: 768px) {
      margin: 5px;
    }
  }
  #collapse-menu {
    display: none;
    transition: ease-in-out;
  }

  @media (max-width: 768px) {
    #collapse-menu {
      display: block;
      text-align: center;
      color: var(--red-color);
      cursor: pointer;
      font-size: 52px;
      margin-right: 10px;
    }
  }

  ul {
    display: flex;
    align-items: flex-end;
    height: auto;
    justify-content: space-evenly;
    width: 60%;
    font-family: var(--secondary-font);
    color: var(--gray-color);
    list-style-type: none;
    font-size: 2rem;
    @media (max-width: 768px) {
      font-size: 16px;
      width: 15%;
      flex-direction: column;
      position: absolute;
      display: ${(props) => (props.open ? "block" : "none")};
      right: 0px;
      top: 84px;
      background-color: #000000;
      border-radius: 4px;
      border-top: 2px dashed #820300;
    }

    .content-avatar-none {
      font-size: 18px;
      color: var(--red-color);
      font-weight: bold;
    }
    .content-avatar-none:hover {
      color: #820300;
    }
    .content-avatar {
      text-align: center;
      display: flex;
      width: 150px;
      font-size: 18px;
      align-items: center;
      justify-content: space-between;
      position: relative;
      border: none;
      color: var(--gray-color);
      background-color: transparent;
      cursor: pointer;

      .avatar {
        width: 50px;
        position: absolute;
        right: 160px;
        bottom: 0;
        border-radius: 50%;
        height: 50px;
        background-color: var(--gray-color);
        opacity: 0.5;
        border: 1px dashed var(--white-color);
      }
    }

    a {
      text-decoration: none;
      color: inherit;
    }
    li:hover,
    li:active {
      color: var(--white-color);
      cursor: pointer;
    }
  }
`;

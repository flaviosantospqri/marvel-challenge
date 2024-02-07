import styled from "styled-components";

export const Container = styled.header`
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
  li {
    transition: ease-in-out;
    transition-duration: 200ms;
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
    font-size: 32px;
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
import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    box-sizing: border-box;
  }
  .content-logo {
    font-family: "Marvel";
    text-transform: uppercase;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    width: 100%;
    text-align: center;
    h1 {
      background-color: var(--red-color);
      width: 200px;
    }
  }
  & .header-login-information {
    font-family: var(--secondary-font);
    display: flex;
    z-index: 1000;
    align-items: flex-start;
    flex-direction: column;
    text-align: left;
    margin: 10px 0;
    margin-top: 50px;
    & p {
      z-index: 1000;
      margin: 0 0;
      color: var(--gray-color);
    }
    & p:first-child {
      font-weight: 700;
      font-size: 2rem;
      color: var(--red-color);
    }
    & p:last-child {
      font-weight: 100;
    }
  }
  .container-login {
    font-family: var(--secondary-font);
    z-index: 200;
    a,
    a:link,
    a:active {
      text-decoration: none;
      color: var(--red-color);
    }
    p:last-child {
      font-size: 1rem;
      text-align: center;
      font-family: var(--secondary-font-thin);
    }
    & .container-form {
      font-family: var(--secondary-font);
      & .form {
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        & .form-input {
          z-index: 1000;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;
          input {
            z-index: 1000;
            margin: 10px 0;
            width: 100%;
            max-width: 350px;
            height: 60px;
            padding: 0 20px;
            border-radius: 20px;
            border: none;
            font-size: 1.5rem;
            color: #000000;
            box-sizing: border-box;
          }
          input::-webkit-input-placeholder {
            color: #ebebeb;
            font-family: var(--secondary-font-thin);
          }
        }
        button {
          font-family: var(--secondary-font);
          width: 100%;
          max-width: 380px;
          height: 60px;
          background-color: var(--red-color);
          border: none;
          margin-top: 20px;
          border-radius: 20px;
          font-size: 1.5rem;
          color: var(--white-color);
          box-shadow: 10px 10px 11px -6px rgba(10, 10, 10, 1);
          @media (max-width: 768px) {
            font-size: 16px;
          }
        }
        button:hover {
          background-color: #b81414;
          transition: ease-in-out;
          transition-duration: 500ms;
          cursor: pointer;
        }
      }
      .form-save-and-forgot {
        font-family: var(--secondary-font);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        a,
        a:link,
        a:active {
          color: var(--gray-color);
          border-bottom: 2px solid var(--red-color);
          @media (max-width: 768px) {
            color: white;
          }
        }
        & div {
          z-index: 1000;
          display: flex;
        }
      }
    }
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,700;1,400;1,700&display=swap');
@font-face {
    font-family: "Axiform Thin";
    src: url("/fonts/Kastelov - Axiforma thin.otf")
    format("opentype");
    font-weight: 100; 
    font-style: normal;
}
@font-face {
    font-family: "Axiform";
    src: url("/fonts/Kastelov - Axiforma Regular.otf")
    format("opentype");
    font-weight: 400; 
    font-style: normal;
}
@font-face {
    font-family: "Axiform";
    src: url("/fonts/Kastelov - Axiforma Bold.otf")
    format("opentype");
    font-weight: 700; 
    font-style: normal;
}
@font-face {
    font-family: "Axiform";
    src: url("/fonts/Kastelov - Axiforma ExtraBold.otf")
    format("opentype");
    font-weight: 900; 
    font-style: normal;
}
:root{
    --primary-font: 'Marvel', sans-serif;
    --secondary-font: "Axiform", sans-serif; 
    --secondary-font-thin: "Axiform Thin", sans-serif; 
    --default-background: linear-gradient(to right, #000000 30%, #212121, #808080);
    --red-color: rgb(255, 0, 0);
    --gray-color: #808080;

    --white-color: #ffffff;
    --card-details-background: linear-gradient(to right, rgba(255, 0, 0, 0.7), rgba(64, 14, 14, 0.7));
    color: #ffffff;
    font-size: 16px;

}
body{
    font-family: var(--primary-font);
    background: var(--default-background);
    color: var(--white-color);
    background-size: 110%;
    height: 100vh;
    width: 100%;
    padding: 0;
    font-size: 16px;
    margin: 0 auto;
    box-sizing: border-box;
}
body > * {
    margin: 0 auto;
}
`;

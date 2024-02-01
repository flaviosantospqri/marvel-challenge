import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Marvel:ital,wght@0,700;1,400;1,700&display=swap');
@font-face {
    font-family: "Axiform";
    src: url("../../public/fonts/Kastelov - Axiforma thin.otf")
    format("opentype");
    font-weight: 100; 
    font-style: normal;
}
@font-face {
    font-family: "Axiform";
    src: url("../../public/fonts/Kastelov - Axiforma Regular.otf")
    format("opentype");
    font-weight: 400; 
    font-style: normal;
}
@font-face {
    font-family: "Axiform";
    src: url("../../public/fonts/Kastelov - Axiforma Bold.otf")
    format("opentype");
    font-weight: 700; 
    font-style: normal;
}
@font-face {
    font-family: "Axiform";
    src: url("../../public/fonts/Kastelov - Axiforma ExtraBold.otf")
    format("opentype");
    font-weight: 900; 
    font-style: normal;
}
:root{
    --primary-font: 'Marvel', sans-serif;
    --secondary-font: "Axiform", sans-serif; 
    --default-background: linear-gradient(to right, #000000 65%, #212121, #808080);
    --red-color: rgb(255, 0, 0);
    --white-color: #ffffff
    --card-details-background: linear-gradient(to right, #FF0000, #400E0E)

}
body{
    font-family: var(--primary-font);
    background: var(--default-background);
    color: var(--white-color);
    background-size: 110%;
    height: 100vh;
    overflow: hidden;
    width: 100%;
    margin: 0;
    padding: 0;
}
h1{
    font-family: var(--secondary-font);
    background-color: var(--red-color);
}
`;

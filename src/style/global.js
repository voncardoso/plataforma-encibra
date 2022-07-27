import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #F4F3F1;
    --white: #FFFFFF;
    
    --text: #39332E;

    --gold-100: #FDF2E4;
    --gold-200: #FBEAD7;
    --gold-300: #F6B766;
    --gold-400: #E2942F;

    --gray-400: #A8A8A8;
  }

  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background:  var(--background);
        --webkit-font-font-smooth: antialiased; // deixar a finte mais nitida
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    ul{
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    .grid-global{
        display: grid;
        grid-template-columns: minmax(100px, 200px) 1fr;
        height: 100vh;
        width: 100vw;
    }
`;

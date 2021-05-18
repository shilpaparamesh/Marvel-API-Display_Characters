import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --dark-snow: #E5E5E5;
        --smoke: #8E8E8E;
        --dark-smoke: #555555;
        --dark-blue: #167ABC;
        --snow: #F5F5F5;
        --shadow: rgba(0, 0, 0, 0.2);
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }

    body, input, textarea, button {
        font-family: 'PT Sans', sans-serif;
        font-weight: 400;
    }

    body {
        background: var(--dark-snow);
        -webkit-font-smoothing: antialiased;
    }

    strong {
        font-weight: 700;
    }

    button, a {
        cursor: pointer;
    }

    a, a:visited {
        text-decoration: none;
        color: var(--dark-smoke);
    }
`;
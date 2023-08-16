import { createGlobalStyle } from "styled-components";
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle `
    body {
        margin: 0;
        font-family: 'Roboto', 'Oxygen', sans-serif;
        line-height: 1.10;
        letter-spacing: 0.2px;
        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    p {
        padding: 0;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        /* width: 60px;
        height: 50px; */
        padding: 10px 30px;
        border-radius: 4px;
        background-color: yellow;
        border: none;

        transition: all 300ms ease-in-out;

        &:hover {
            transform: scale(1.03);
            background-color: #09f;
        }
    }
`

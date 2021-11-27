import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scrollbar-width: thin;
        scrollbar-color: darkgray transparent;
    }
    html{
        &::-webkit-scrollbar{
            width: .7rem;
        }
        &::-webkit-scrollbar-track{
            background: transparent;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgray;
            border-radius: 20px;
            border: transparent;
        }
    }

    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color:#333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color:#333;
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  a {
    text-decoration: none;
  }

  button {
    border-radius: ${props => props.theme.border.smallElements};
  }

  p {
    text-align: justify;
  }

  ul, ol {
    list-style: none;
  }
`;

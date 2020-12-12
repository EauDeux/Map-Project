import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

`

export { GlobalStyle }

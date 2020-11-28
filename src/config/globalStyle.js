import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }

  a {
    text-decoration: none;
    color: black;
  }

  

`

export { GlobalStyle }

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
    color: black;
  }

  /* .rsm-svg{
    width: 100%;
    height: 100vh;
  }

  .rsm-geographies{
    width: 100%;
    height: 100vh;
  } */

  /* default: {
    fill: '#D6D6DA',
    outline: 'none'
  }
  hover: {
    fill: '#F53',
    outline: 'none'
  }
  pressed: {
    fill: '#E42',
    outline: 'none'
  } */

`

export { GlobalStyle }

import { createGlobalStyle } from 'styled-components'
import { colors } from './theme'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.cream};
    color: ${colors.darkGray};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  ul {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }
`

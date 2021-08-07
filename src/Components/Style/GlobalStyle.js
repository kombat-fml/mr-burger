import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #f0f0f0;
    font-family: 'Roboto', sans-serif;
    color: black;
    font-size: 20px;
    padding-top: 80px;
  }

  img {
    max-width: 100%;
    height: auto
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3 {
    font-family: 'Pacifico', cursive;
    margin: 0;
  }
  p {
    margin: 0;
  }
  button {
    cursor: pointer;
  }
  input, button {
    font: inherit;
  }

  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }
  *[disabled] {
    cursor: default;
  }
`;
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors['background']};
    color: ${(props) => props.theme.colors['base-text']};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    outline: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors['base-button']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors['base-text']};
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors['base-title']};
  }
`
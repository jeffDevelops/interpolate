import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  body * {
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Overpass', sans-serif;
    letter-spacing: 0.01em;
  }

  #root {
    height: 100%;
    width: 100%;
    min-height: 100%;
  }

  code, pre {
    font-family: 'Overpass Mono', monospace;
  }

  p {
    margin: 0;
    padding: 0;
  }

  .react-codemirror2 * {
    font-family: 'Overpass Mono', monospace;
  }

  .react-codemirror2 {
    box-sizing: border-box;
    height: calc(100% - 50px); /* account for the padding around the editor */
    width: 100%;
    overflow: hidden;
    padding-bottom: 0;
    padding-top: 15px;
  }

  .react-codemirror2 .CodeMirror {
    height: 100%;
  }

  .CodeMirror-sizer {
    background-color: #fff;
  }

  .CodeMirror-gutters {
    border-right: 0 !important;
  }
`;

export default GlobalStyles;
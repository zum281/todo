import { createGlobalStyle } from "styled-components";
import { ThemeType } from ".";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${(props) => props.theme.font.body};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
    color: ${(props) => props.theme.color.black};
    background-color: ${(props) => props.theme.color.white};

  }
`;

export default GlobalStyle;

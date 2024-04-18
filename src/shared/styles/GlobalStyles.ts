import { createGlobalStyle } from "styled-components";
import { theme } from "./index";

export const GlobalStyles = createGlobalStyle`
  :root {   
    font-size: ${() => theme.fontSizes.s};
    color:${() => theme.colors.text.primary};
    background-color: ${() => theme.colors.surface.primary};
    
  }
  *,
  *::before,
  *::after {
    font-family: '';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
  }
  body { 
    margin: 0;
    padding: 0;  
    min-height: 100vh;
    line-height: 130%;
  }
  html {
    scroll-behavior: smooth;  
    font-size: ${() => theme.fontSizes["2xl"]};
  }
  html,
  body {
    height: 100%;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;  
  }
  ul, li, ol {  
    list-style: none;
  }
  a,
  a:visited,
  a:hover {
    text-decoration: none;   
  } 
  img { 
     display: block;
     width: 100%;
  }
`;

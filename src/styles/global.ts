import { createGlobalStyle } from "styled-components";

const globalTheme = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body {
    scroll-behavior: smooth;
  }
  
  html, body {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    background-color: ${(props) => props.theme.colors.blackRaisin};
  }

  html.noOverflow {
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #f2f2f2;
  }

  p {
    font-weight: 400;
    font-family: 'Source Sans Pro';
    color: #f2f2f2;
  }

  span {
    font-weight: 400;
    font-family: 'Source Sans Pro';
    color: #f2f2f2;
  }

  ::selection {
    background: #018cb7;
    color: #fff;
  }

  #__next {
    width: 100vw;
    height: 100vh;
  }

  /* width */
  ::-webkit-scrollbar {
   width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

`;

export default globalTheme;

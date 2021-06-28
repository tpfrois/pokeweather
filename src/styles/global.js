import { createGlobalStyle } from 'styled-components';
import Pokeball from '../assets/pokeball.svg';
import Dots from '../assets/dots.svg';

export default createGlobalStyle`
  :root {
    --water-light: #1AAFE1;
    --water-dark: #1487B4;

    --ice-light: #63CDF6;
    --ice-dark: #18AEE1;

    --fire-light: #F58C1F;
    --fire-dark: #F36F21;

    --electric-light: #F5B915;
    --electric-dark: #F4971E;

    --grass-light: #54B947;
    --grass-dark: #46A047;
    
    --bug-light: #54B947;
    --bug-dark: #46A047;

    --ground-light: #78431B;
    --ground-dark: #5B3513;

    --rock-light: #A7A097;
    --rock-dark: #927F6D;

    --normal-light: #F5B915;
    --normal-dark: #F58C1F;
  }
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 100%;
	  font: inherit;
    vertical-align: baseline;
    font-family:'Poppins', sans-serif;
  }
  #root {
    height: 100% !important;
  }
  html {
    height: -webkit-fill-available;
  }
  a {
    text-decoration: none;
  }
  ol, ul {
    list-style: none;
  }
  button {
    cursor: pointer;
  }
  body {
    height: -webkit-fill-available;
    background: linear-gradient(180deg, #F15F3E 0%, #F4856C 100%);
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;

    @media(min-width: 1024px) {
      height: 100vh;

      &:before {
      content: url(${Pokeball});
      position: absolute;
      z-index: -2;
      bottom: 0;
    }

    &:after {
      content: url(${Dots});
      position: absolute;
      z-index: -3;
      top: 0;
      left: 20%;
    }

    }
  }
`;
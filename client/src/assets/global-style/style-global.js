import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Oswald', sans-serif;
  }
  
  html,
  body,
  #root {
    height: 100%;
  }

  body{
    background-color: #fff;
  }
`;

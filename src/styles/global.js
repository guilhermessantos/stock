import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html,
  body,
  #root {
    min-height: 100%;
  }

  body,
  input,
  button {
    font-family: 'Source Sans Pro', sans-serif;
  }

  #__next {
    max-width: 660px;
    margin-left: auto;
    margin-right: auto;
  }
`

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
    height: 100%;
  }

  body {
    padding-top: 15px;

    @media (min-width: 480px) {
      padding-bottom: 40px;
      padding-top: 40px;
    }
  }

  body,
  input,
  button {
    appearance: none;
    font-family: 'Source Sans Pro', sans-serif;
  }

  #__next {
    max-width: 660px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .link_github {
    top: 0;
    position: absolute;
    right: 0;
    text-decoration: none;

    &::before {
      border-color: #DDD #DDD transparent transparent;
      border-style: solid;
      border-width: 28px;
      content: "";
      position: absolute;
      top: 0;
      right: 0;
    }

    svg {
      fill: #00214d;
      position: relative;
      top: 10px;
      right: 6px;
    }
  }
`

import { createGlobalStyle, keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
`

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

  .load {
    align-items: center;
    display: flex;
    background: #fff;
    bottom: 0;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;

    svg {
      fill: #00ebc7;
      animation: ${rotate} .4s linear infinite;
    }
  }

  .footer {
    margin: 40px 0;
    position: relative;
    text-align: center;

    div,
    div::before,
    div::after {
      left: 50%;
      position: absolute;
      transform: translateX(-50%);
    }

    div,
    span {
      display: inline-flex;
    }

    div {
      border: 2px solid #DDD;
      bottom: 100%;
      border-radius: 5px;
      height: 28px;
      transition: opacity .2s, transform .2s, visibility .2s;
      opacity: 0;
      visibility: hidden;

      &.show-options-remove {
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, -8px);
      }

      &::before,
      &::after {
        content: '';
        border-width: 7px;
        border-style: solid;
      }

      &::before {
        border-color: #DDD transparent transparent transparent;
        top: 100%;
      }

      &::after {
        border-color: #fff transparent transparent transparent;
        top: calc(100% - 2px);
      }
    }

    span {
      color: #666;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      transition: color .2s;
      text-transform: uppercase;
      width: 40px;

      &:hover {
        color: #00214d;
      }
    }
  }
`

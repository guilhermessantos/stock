import styled from 'styled-components'

export const Table = styled.table`
  color: #666;
  border-collapse: collapse;
  text-align: left;
  width: 100%;

  thead tr {
    color: #00214d;
    border-top: 2px solid #DDD;
    border-bottom: 2px solid #DDD;
    height: 60px;
  }

  tbody tr {
    height: 50px;

    &:nth-child(odd) {
      background: #fdfdfd;
    }
  }

  tbody td:first-child {
    font-weight: bold;
  }

  tbody td:last-child {
    text-align: right;
  }
`

export const Participation = styled.td`
  span {
    display: inline-block;
    width: 40px;

    &:first-child {
      border-right: 2px solid #DDD;
    }
  }

  span + span {
    text-align: right;
  }
`

export const ButtonAction = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  position: relative;
  width: 20px;

  &:hover {
    &::before {
      color: #00214d;
    }

    div {
      opacity: 1;
      visibility: visible;
      transform: translate(-4px, -50%);
    }
  }

  &::before,
  div::before,
  div::after,
  div {
    position: absolute;
    top: 50%;
  }

  &::before,
  div::before,
  div::after {
    content: '';
  }

  &::before {
    background: currentColor;
    border-radius: 100%;
    box-shadow: 0 7px 0 0 currentColor, 0 -7px 0 0 currentColor;
    color: #DDD;
    height: 4px;
    left: 50%;
    transition: color .3s;
    transform: translate(-50%, -50%);
    width: 4px;
  }

  div {
    border: 2px solid #DDD;
    border-radius: 5px;
    display: flex;
    height: 28px;
    right: 100%;
    transform: translate(10px, -50%);
    opacity: 0;
    visibility: hidden;
    transition: opacity .3s, visibility .3s, transform .3s;

    &::before,
    &::after {
      border-width: 7px;
      border-style: solid;
      transform: translateY(-50%);
    }

    &::before {
      border-color: transparent transparent transparent #DDD;
      left: 100%;
    }

    &::after {
      border-color: transparent transparent transparent #fff;
      left: calc(100% - 2px);
    }
  }

  span {
    background: #fff;
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    width: 30px;
    position: relative;
    z-index: 1;

    svg {
      fill: #888;
      transition: fill .2s;
    }

    &:hover svg {
      fill: #00214d;
    }
  }

  span + span {
    border-left: 2px solid #DDD;
    width: 32px;
  }
`

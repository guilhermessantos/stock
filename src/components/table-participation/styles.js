import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
`

export const Table = styled.table`
  color: #666;
  border-collapse: collapse;
  text-align: left;
  width: 100%;

  thead tr {
    color: #00214d;
    border-top: 2px solid #DDD;
    border-bottom: 2px solid #DDD;
    transition: opacity .2s;
    height: 60px;
  }

  tbody tr:nth-child(odd) {
    background: #fdfdfd;
  }

  tbody td {
    height: 50px;
  }

  tbody td:first-child {
    font-weight: bold;
    text-transform: uppercase;
  }

  tbody td:last-child {
    text-align: right;
  }

  .load-item {
    animation: ${rotate} .4s linear infinite;
    margin-left: 20px;
  }

  .active-load {
    opacity: .3;
    pointer-events: none;
  }

  @media (max-width: 479px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tbody tr {
      border-top: 2px solid #DDD;
      padding: 10px 0;
    }

    tbody td {
      height: 30px;
      line-height: 30px;
      padding-left: 50%;
      margin: 5px 0;
      position: relative;

      &:last-child {
        text-align: left;
      }
    }

    tbody td::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      white-space: nowrap;
    }

    td:nth-child(1)::before {
      content: 'Ação';
    }

    td:nth-child(2)::before {
      content: 'Preço atual';
    }

    td:nth-child(3)::before {
      content: 'Alocação';
    }

    td:nth-child(4)::before {
      content: 'Aporte';
    }

    td:nth-child(5)::before {
      content: 'Quant.';
    }

    .button__remove {
      display: flex;
      align-items: center;
      border: 2px solid #DDD;
      border-radius: 5px;
      height: 30px;
      width: 30px;
      background: #FFF;
      position: absolute;
      right: 0;
      justify-content: center;
      top: 50%;
      transform: translateY(-50%);

      svg {
        fill: #888;
      }
    }
  }

  @media (min-width: 600px) {
    .table__contribute {
      width: 140px;
    }
  }
`

export const Participation = styled.td`
  span {
    display: inline-block;
    width: 45px;

    &:first-child {
      border-right: 2px solid #DDD;
    }
  }

  span + span {
    text-align: right;
  }
`

export const ButtonAction = styled.div`
  cursor: pointer;
  display: inline-block;
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

  button {
    border: 0;
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

export const Message = styled.div`
  align-items: center;
  color: #00214d;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;

  svg {
    margin: 0 5px;
  }
`

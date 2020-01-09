import styled, { css } from 'styled-components'

const Button = styled.button`
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background .2s, color .2s;

  ${props => !props.secondary && css`
    background: ${props => props.error ? '#ec7669' : '#00ebc7'};
    color: ${props => props.error ? '#FFF' : '#00214d;'};

    &:hover {
      background: ${props => props.error ? '#d45345' : '#0be4c4'};
    }
  `}

  ${props => props.secondary && css`
    background: none;
    border: 2px solid #DDD;
    color: #555;

    &:hover {
      background: #f8f8f8;
    }
  `}

  ${props => !props.size && css`
    font-size: 18px;
    height: 50px;
    padding: 0 10px;
  `}

  ${props => props.size && css`
    font-size: 16px;
    height: 35px;
    padding: 0 20px;
  `}

  &:disabled {
    background: #DDD;
    color: #555;
    cursor: default;
  }
`

export { Button }

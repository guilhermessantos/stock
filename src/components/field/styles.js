import styled from 'styled-components'

export const Container = styled.div`
  label {
    color: #00214d;
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 2px;
  }

  input {
    border-width: 2px;
    border-style: solid;
    border-color: ${props => props.error ? '#ec7669' : '#DDD'};
    border-radius: 5px;
    font-size: 16px;
    height: 50px;
    padding: 0 15px;
    transition: border .2s;
    width: 100%;

    &:focus {
      border-color: #00ebc7;
    }

    &:disabled {
      background: #f8f8f8;
    }

    ::placeholder {
      color: #DDD;
    }
  }
`

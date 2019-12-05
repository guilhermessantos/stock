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
    border: 2px solid #DDD;
    border-radius: 5px;
    font-size: 16px;
    height: 50px;
    padding: 0 15px;
    width: 100%;
    transition: border .2s;

    &:focus {
      border-color: #00ebc7;
    }

    ::placeholder {
      color: #DDD;
    }
  }
`

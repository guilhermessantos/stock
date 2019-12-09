import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.error ? '#ec7669' : '#00ebc7'};
  border: 0;
  border-radius: 5px;
  color: ${props => props.error ? '#FFF' : '#00214d;'};
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  padding: 0 20px;
  transition: background .2s, color .2s;

  &:hover {
    background: ${props => props.error ? '#d45345' : '#0be4c4'};
  }

  &:disabled {
    background: #DDD;
    color: #555;
    cursor: default;
  }
`

export { Button }

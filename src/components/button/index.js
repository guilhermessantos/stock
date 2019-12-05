import styled from 'styled-components'

const Button = styled.button`
  background: #00ebc7;
  border: 0;
  border-radius: 5px;
  color: #00214d;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  height: 50px;
  padding: 0 20px;
  transition: background .2s;

  &:hover {
    background: #0be4c4;
  }
`

export { Button }

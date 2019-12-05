import styled from 'styled-components'
import { Container } from '../field/styles'
import { Button } from '../button'

export const FieldGroup = styled.div`
  align-items: flex-end;
  display: flex;

  ${Container} {
    width: 100%;

    input {
      border-radius: 5px 0 0 5px;
      width: 100%;
    }
  }

  ${Button} {
    border-radius: 0 5px 5px 0;
    min-width: 130px;
    margin-left: -2px;
  }
`

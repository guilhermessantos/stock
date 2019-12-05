import styled from 'styled-components'
import { FieldGroup } from '../field-group'
import { Container as Field } from '../field/styles'
import { Button } from '../button'

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  margin-bottom: 40px;

  ${FieldGroup} {
    min-width: 330px;
  }

  > ${Field} {
    margin: 0 30px;
  }

  > ${Button} {
    min-width: 150px;
  }
`

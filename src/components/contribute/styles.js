import styled from 'styled-components'
import { FieldGroup } from '../field-group'

export const Container = styled.div`
  align-items: center;
  border-bottom: 2px solid #DDD;
  display: flex;
  margin-bottom: 30px;
  margin-top: 40px;
  justify-content: space-between;
  padding-bottom: 20px;

  ${FieldGroup} {
    width: 330px;
  }
`

export const Value = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-top: 24px;
  margin-left: 20px;
`

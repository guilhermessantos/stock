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
  line-height: 1;
  margin-top: 24px;
  margin-left: 20px;
  text-align: right;

  strong {
    font-weight: bold;
    font-size: 28px;
    display: block;
    margin-bottom: 2px;
  }

  small {
    color: #666;
    font-size: 15px;
  }
`

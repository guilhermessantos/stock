import styled from 'styled-components'
import { FieldGroup } from '../field-group'

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #DDD;
  margin-bottom: 30px;
  justify-content: space-between;
  padding-bottom: 20px;

  ${FieldGroup} {
    width: 100%;

    @media (min-width: 480px) {
      width: 330px;
    }
  }

  @media (max-width: 479px) {
    flex-wrap: wrap;

    ${FieldGroup} {
      order: 2;
    }
  }
`

export const Value = styled.div`
  line-height: 1;
  text-align: center;
  white-space: nowrap;

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

  @media (max-width: 479px) {
    border-bottom: 2px solid #DDD;
    margin-bottom: 13px;
    padding-bottom: 15px;
    order: 1;
    flex: 1;
  }

  @media (min-width: 480px) {
    margin-top: 24px;
    margin-left: 20px;
    text-align: right;
  }
`

import styled, { keyframes } from 'styled-components'
import { FieldGroup } from '../field-group'
import { Container as Field } from '../field/styles'
import { Button } from '../button'

const rotate = keyframes`
  from {
    transform: rotate(0)
  }

  to {
    transform: rotate(360deg)
  }
`

export const Container = styled.div`
  align-items: flex-end;
  display: flex;
  margin-bottom: 40px;

  ${FieldGroup} {
    position: relative;
    min-width: 330px;

    > svg {
      fill: #00214d;
      position: absolute;
      left: 15px;
      bottom: 17px;
      transition: opacity .2s, transform .3s;
      opacity: ${props => props.hasCompany ? 1 : 0};
      transform: translateX(${props => props.hasCompany ? 0 : '-20px'})
    }

    input {
      padding-left: ${props => props.hasCompany && '40px'};
      border-color: ${props => props.hasCompany && '#00ebc7'};
      transition: padding-left .3s;
      text-transform: uppercase;
    }

    button svg {
      animation: ${rotate} .5s linear infinite;
      position: relative;
      top: 2px;
    }
  }

  > ${Field} {
    margin: 0 30px;
  }

  > ${Button} {
    min-width: 150px;
  }
`

export const Message = styled.div`
  align-items: center;
  color: #ec7669;
  font-size: 14px;
  display: flex;
  position: absolute;
  top: calc(100% + 5px);

  svg {
    margin-right: 5px;
  }

  strong {
    margin-left: 4px;
    text-transform: uppercase;
  }
`

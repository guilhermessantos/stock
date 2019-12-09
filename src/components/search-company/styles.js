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
  flex-wrap: wrap;
  margin-bottom: 40px;

  ${FieldGroup} {
    position: relative;
    min-width: 100%;
    flex: auto;
    margin-bottom: 20px;

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

  > ${Field},
  > ${Button} {
    flex: 1;
  }

  > ${Field} {
    margin-right: 20px;
  }

  > ${Button} {
    max-width: 130px;
    min-width: auto;
  }

  @media (min-width: 480px) {
    flex-wrap: initial;

    ${FieldGroup} {
      margin-bottom: 0;
      min-width: 220px;
      max-width: 330px;
    }

    > ${Field} {
      margin: 0 20px;
    }
  }
`

export const Message = styled.div`
  bottom: calc(100%);
  align-items: center;
  color: #ec7669;
  font-size: 14px;
  display: flex;
  position: absolute;

  svg {
    margin-right: 5px;
  }

  strong {
    margin-left: 4px;
    text-transform: uppercase;
  }

  @media (min-width: 480px) {
    bottom: auto;
    top: calc(100% + 5px);
  }
`

import React from 'react'
import t from 'prop-types'
import { Container } from './styles'

const Field = ({ id, label, placeholder }) => (
  <Container>
    <label htmlFor={id}>{label}</label>
    <input id={id} type="text" placeholder={placeholder} />
  </Container>
)

Field.propTypes = {
  id: t.string,
  label: t.string,
  placeholder: t.string
}

export { Field }

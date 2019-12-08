import React from 'react'
import t from 'prop-types'
import { Container } from './styles'

const Field = ({ id, label, placeholder, onChange, value, disabled, error, refProp, children }) => (
  <Container error={error}>
    <label htmlFor={id}>{label}</label>
    {children ? children : <input ref={refProp} id={id} type="text" placeholder={placeholder} onChange={onChange} value={value} disabled={disabled} />}
  </Container>
)

Field.propTypes = {
  id: t.string,
  label: t.string,
  value: t.string,
  disabled: t.bool,
  placeholder: t.string,
  error: t.bool
}

export { Field }

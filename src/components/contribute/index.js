import React, { useState } from 'react'
import { Field } from '../field'
import { Button } from '../button'
import { FieldGroup } from '../field-group'
import { Container, Value } from './styles'
import NumberFormat from 'react-number-format'

const Contribute = ({ handleValue, contribute, contributeTotal }) => {
  const [fieldValue, setFieldValue] = useState('')

  return (
    <Container>
      <FieldGroup>
        <Field
          id="contribute-value"
          label="Valor do aporte"
        >
          <NumberFormat
            id="contribute-value"
            placeholder="R$ 0"
            thousandSeparator="."
            decimalSeparator=","
            onValueChange={e => setFieldValue(e.formattedValue)}
            value={fieldValue}
            prefix="R$ "
          />
        </Field>

        <Button
          onClick={() => {
            handleValue(fieldValue)
            setFieldValue('')
          }}
        >
          Cadastrar
        </Button>
      </FieldGroup>

      <Value>
        <strong>{contribute}</strong>
        <small>R$ {contributeTotal ? contributeTotal : 0}</small>
      </Value>
    </Container>
  )
}

export { Contribute }

import React from 'react'
import { Field } from '../field'
import { Button } from '../button'
import { FieldGroup } from '../field-group'
import { Container, Value } from './styles'

const Contribute = () => (
  <Container>
    <FieldGroup>
      <Field
        id="contribute-value"
        label="Valor do aporte"
        placeholder="R$ 0,00"
      />
      <Button>Cadastrar</Button>
    </FieldGroup>

    <Value>
      R$ 5000,00
    </Value>
  </Container>
)

export { Contribute }

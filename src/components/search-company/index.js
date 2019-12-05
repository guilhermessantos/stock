import React from 'react'
import { Field } from '../field'
import { Button } from '../button'
import { FieldGroup } from '../field-group'
import { Container } from './styles'

const SearchCompany = () => (
  <Container>
    <FieldGroup>
      <Field
        label="Empresa"
        placeholder="ITSA4"
        id="company"
      />
      <Button>Buscar</Button>
    </FieldGroup>

    <Field
      label="Participação"
      placeholder="10%"
      id="participation"
    />

    <Button>Cadastrar</Button>
  </Container>
)

export { SearchCompany }

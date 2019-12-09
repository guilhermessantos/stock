import React, { useState, useRef } from 'react'
import NumberFormat from 'react-number-format'
import { Field } from '../field'
import { Button } from '../button'
import { FieldGroup } from '../field-group'
import { Container, Message } from './styles'
import { FaSyncAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

const SearchCompany = ({ handleCompany }) => {
  const refInputSymbol = useRef(0)
  const [valueCompany, setValueCompany] = useState('')
  const [load, setLoad] = useState(false)
  const [company, setCompany] = useState(false)
  const [messageInfo, setMessageInfo] = useState(false)
  const [valueParticipation, setValueParticipation] = useState('')
  const [newCompany, setNewCompany] = useState({
    symbol: '',
    price: 0,
    participation: 0
  })

  const getAction = async company => {
    setLoad(true)
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${company}.sa&apikey=B0RKSSJH2TS1VNXF`)
    const data = await response.json()
    setLoad(false)

    if (data['Error Message'] || data['Note']) {
      setMessageInfo(true)
      return
    }

    const convertPrice = (Math.round(data['Global Quote']['05. price'] * 100) / 100).toFixed(2)

    setNewCompany({
      ...newCompany,
      symbol: valueCompany,
      price: parseFloat(convertPrice)
    })

    setCompany(true)
  }

  const save = () => {
    const participation = valueParticipation.replace(/\s*\%+/g, '')

    handleCompany({
      ...newCompany,
      participation: parseInt(participation)
    })

    setCompany(false)
    setValueCompany('')
    setValueParticipation('')
  }

  return (
    <Container hasCompany={company}>
      <FieldGroup>
        <Field
          label="Empresa"
          placeholder="ITSA4"
          id="company"
          onChange={e => setValueCompany(e.target.value)}
          disabled={load || company || messageInfo}
          error={messageInfo}
          value={valueCompany}
          refProp={refInputSymbol}
        />

        {company || messageInfo ?
          <Button
            disabled={load}
            error={messageInfo}
            onClick={() => {
              setCompany(false)
              setMessageInfo(false)
              setValueCompany('')
            }}
          >
            {!load ? 'Editar' : <FaSyncAlt />}
          </Button>
         : <Button disabled={load} onClick={() => valueCompany.length && getAction(valueCompany)}>{!load ? 'Buscar' : <FaSyncAlt />}</Button>
        }
        <FaCheckCircle />
        {messageInfo && <Message><FaExclamationCircle />Não foi possivel encontrar o ativo: <strong>{valueCompany}</strong></Message>}
      </FieldGroup>

      <Field
        label="Participação"
        id="participation"
      >
        <NumberFormat
          id="participation"
          placeholder="10%"
          onValueChange={e => setValueParticipation(e.formattedValue)}
          format="##%"
          value={valueParticipation}
          type="tel"
        />
      </Field>

      <Button
        onClick={() => (valueCompany.length && valueParticipation.length && !messageInfo) && save()}
      >Cadastrar</Button>
    </Container>
  )
}

export { SearchCompany }

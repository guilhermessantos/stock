import React, { useEffect } from 'react'
import { MediaQuery } from 'react-responsive-hoc'
import { FaTrashAlt, FaDollarSign, FaRedo, FaSyncAlt } from 'react-icons/fa'
import { Table, Participation, ButtonAction, Message } from './styles'

const TableParticipation = ({ companies, contribute, handleContributeTotal, handleRemoveCompany, handleUpdateCompany, loadUpdate }) => {
  useEffect(() => {
    let total = 0;
    const listValue = document.querySelectorAll('.table__participation')

    for (const item of listValue) {
      const replaceDot = item.textContent.replace(/\,/, '.')
      total += Number(replaceDot.replace(/\R\$/, ''))
    }

    handleContributeTotal(parseFloat(total).toFixed(2))
  }, [contribute, companies, loadUpdate])

  const handleParticipation = (value) => {
    let total = 0

    companies.map(item => {
      total += item.participation
    })

    return parseInt(value / total * 100)
  }

  const handleAmount = (price, participation) => {
    let amount = []
    const contributeValue = handleParticipation(participation) * Number(contribute.split('.').join('')) / 100

    for(let i = price; i <= contributeValue; i += price) {
      amount.push(i)
    }

    return amount.length
  }

  const replaceDot = value => {
    return value.toString().replace(/\./g, ',')
  }

  const handleContribute = (price, participation) => {
    return replaceDot(parseFloat(handleAmount(price, participation) * price).toFixed(2))
  }

  return (
    companies.length ? (
      <Table>
        <thead>
          <tr>
            <th width="100">Ação</th>
            <th>Preço atual</th>
            <th>Alocação</th>
            <th className="table__contribute">Aporte</th>
            <th>Quant.</th>
            <MediaQuery query="(min-width: 480px)">
              <th></th>
            </MediaQuery>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={company.symbol + index} className={(loadUpdate.load && loadUpdate.symbol == company.symbol) && 'active-load'}>
              <td>
                {company.symbol}
                <MediaQuery query="(max-width: 479px)">
                  <button className="button__remove" onClick={() => handleRemoveCompany(company.symbol)}><FaTrashAlt /></button>
                </MediaQuery>
              </td>
              <td>
                {loadUpdate.load && loadUpdate.symbol == company.symbol ? <FaSyncAlt className='load-item' size="15" /> : `R$ ${replaceDot(company.price)}`}
              </td>
              <Participation>
              <span>{company.participation}%</span><span>{handleParticipation(company.participation)}%</span>
              </Participation>
              <td className="table__participation">R$ {handleContribute(company.price, company.participation)}</td>
              <td>{handleAmount(company.price, company.participation)}</td>
              <MediaQuery query="(min-width: 480px)">
                <td>
                    <ButtonAction>
                      <div>
                        <button onClick={() => handleRemoveCompany(company.symbol)}><FaTrashAlt /></button>
                        <button onClick={() => handleUpdateCompany(company.symbol)}><FaRedo /></button>
                      </div>
                    </ButtonAction>
                </td>
              </MediaQuery>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : <Message><FaDollarSign /> Ainda não foi incluído ativo <FaDollarSign /></Message>
  )
}

export { TableParticipation }

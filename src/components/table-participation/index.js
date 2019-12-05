import React from 'react'
import { FaTrashAlt, FaRedo } from 'react-icons/fa'
import { Table, Participation, ButtonAction } from './styles'

const TableParticipation = () => (
  <Table>
    <thead>
      <tr>
        <th width="100">Ação</th>
        <th>Preço atual</th>
        <th>Participação</th>
        <th>Aporte</th>
        <th>Quant.</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>MALL11</td>
        <td>R$ 13,00</td>
        <Participation>
          <span>10%</span><span>12%</span>
        </Participation>
        <td>R$ 2000,00</td>
        <td>51</td>
        <td>
          <ButtonAction>
            <div>
              <span><FaTrashAlt /></span>
              <span><FaRedo /></span>
            </div>
          </ButtonAction>
        </td>
      </tr>
      <tr>
        <td>CNTO3</td>
        <td>R$ 13,00</td>
        <Participation>
          <span>10%</span><span>12%</span>
        </Participation>
        <td>R$ 2000,00</td>
        <td>51</td>
        <td>
          <ButtonAction>
            <div>
              <span><FaTrashAlt /></span>
              <span><FaRedo /></span>
            </div>
          </ButtonAction>
        </td>
      </tr>
      <tr>
        <td>ITSA4</td>
        <td>R$ 13,00</td>
        <Participation>
          <span>7%</span><span>8%</span>
        </Participation>
        <td>R$ 2000,00</td>
        <td>51</td>
        <td>
          <ButtonAction>
            <div>
              <span><FaTrashAlt /></span>
              <span><FaRedo /></span>
            </div>
          </ButtonAction>
        </td>
      </tr>
    </tbody>
  </Table>
)

export { TableParticipation }

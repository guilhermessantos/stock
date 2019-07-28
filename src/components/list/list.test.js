import { list } from './list'
import { mockCompanies, mockNoCompanies } from './__mock__'

describe('List', () => {
  it('Should render component list', () => {
    const company = mockCompanies.companies
    const element = document.createElement('div')

    const item = company.map(company => {
      const percent = company.percent ? company.percent : 0
      const contribution = company.contribution ? company.contribution : 0
      const amout = company.amount ? company.amount : 0

      return `
        <div class="company">
          <div class="company__symbol">${company.symbol}</div>
          <div class="company__current-price">R$ ${company.currentPrice}</div>
          <div class="company__current-percent">${company.currentPercent}%</div>
          <div class="company__percent">${percent}%</div>
          <div class="company__contribution">R$ ${contribution}</div>
          <div class="company__amount">${amout}</div>
        </div><hr/>
      `
    }).join('')

    expect(list.render(mockCompanies, element)).toEqual(item)
  })
})

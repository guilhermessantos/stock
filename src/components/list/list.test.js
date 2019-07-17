import { list } from './list'

describe('List', () => {
  const contribution = 1200

  let mock = [{
    symbol: 'CNTO3',
    currentPrice: 10,
    currentPercent: 10
  }]

  let mock2 = [{
    symbol: 'CNTO3',
    currentPrice: 10,
    currentPercent: 10
    }, {
    symbol: 'ITSA4',
    currentPrice: 10,
    currentPercent: 10
  }]

  it('Should render companies list component', () => {
    const el = mock.map(company => {
      let percent = company.currentPercent / list.getTotalPercent(mock)
      let parsePercent = parseInt(percent * 100)

      return `
        <div class="company">
          <div class="company__symbol">${company.symbol}</div>
          <div class="company__current-price">R$ ${company.currentPrice}</div>
          <div class="company__current-percent">${company.currentPercent}%</div>
          <div class="company__percent">${parsePercent}%</div>
          <div class="company__contribution">R$ ${list.contribution(percent)}</div>
          <div class="company__amount">${list.amount(company.currentPrice, list.contribution(percent))}</div>
        </div>`
    }).join('')

    const el2 = mock2.map(company => {
      let percent = company.currentPercent / list.getTotalPercent(mock2)
      let parsePercent = parseInt(percent * 100)

      return `
        <div class="company">
          <div class="company__symbol">${company.symbol}</div>
          <div class="company__current-price">R$ ${company.currentPrice}</div>
          <div class="company__current-percent">${company.currentPercent}%</div>
          <div class="company__percent">${parsePercent}%</div>
          <div class="company__contribution">R$ ${list.contribution(percent)}</div>
          <div class="company__amount">${list.amount(company.currentPrice, list.contribution(percent))}</div>
        </div>`
    }).join('')

    const element = document.createElement('div')
    element.innerHTML = el

    expect(list.render(mock, list.getTotalPercent(mock), element)).toEqual(el)
    expect(list.render(mock2, list.getTotalPercent(mock2), element)).toEqual(el2)
  })

  it('Should not have list', () => {
    const info = 'Nenhuma empresa selecionada'
    const el = document.createElement('div')
    el.innerHTML = info

    expect(list.noHasList(el)).toEqual(info)
  })

  it('Should return companies percent total', () => {
    let total = 0

    for (let i in mock) total += mock[i].currentPrice

    expect(list.getTotalPercent(mock)).toEqual(total)
  })

  it('Should return the contribution value', () => {
    let perc = 0.5
    let total = contribution * perc

    expect(list.contribution(perc, contribution)).toEqual(total)
  })

  it('Should return amount of assets', () => {
    expect(list.amount(10, 100)).toEqual(10)
  })
})




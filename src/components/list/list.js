import { $q } from '../utils/utils'

const contribution = 1200

const mock = [{
  symbol: 'SUZB3',
  currentPrice: 33.67,
  currentPercent: 5
}, {
  symbol: 'GEPA4',
  currentPrice: 44.00,
  currentPercent: 10
}, {
  symbol: 'MDIA3',
  currentPrice: 38.04,
  currentPercent: 5
},
{
  symbol: 'KLBN11',
  currentPrice: 16.72,
  currentPercent: 5
}, {
  symbol: 'GGRA4',
  currentPrice: 25.25,
  currentPercent: 10
}, {
  symbol: 'ECOR3',
  currentPrice: 11.35,
  currentPercent: 5
}, {
  symbol: 'MALL11',
  currentPrice: 105.15,
  currentPercent: 10
}, {
  symbol: 'XPML11',
  currentPrice: 110.30,
  currentPercent: 10
}, {
  symbol: 'GGRC11',
  currentPrice: 141.82,
  currentPercent: 10
}]

const list = {
  init: () => list.hasList(list.getLocal()),
  hasList: data => data ? list.render(list.get(data)) : list.noHasList(),
  setLocal: data => localStorage.setItem('companies', JSON.parse(data)),
  getLocal: () => mock ? mock : JSON.parse(localStorage.getItem('companies')),
  get: (data, props) => data.map(company => props ? company[props] : company),
  contribution: (percent, value = contribution) => parseInt(value * percent),
  amount: (price, contribution) => {
    let currentPrice = price
    let total = []

    for( ; price <= contribution; price += currentPrice) {
      total.push(price)
    }

    return total.length
  },
  getTotalPercent: (data = list.getLocal()) => {
    let total = 0
    let percent = list.get(data, 'currentPercent')

    for (let i in percent) total += parseFloat(percent[i])

    return total
  },
  render: (data, totalPercent = list.getTotalPercent(), element = $q('list')) => {
    const company = data.map(company => {
      let percent = company.currentPercent / totalPercent
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

    return element.innerHTML = company
  },
  noHasList: (element = $q('list')) => element.innerHTML = 'Nenhuma empresa selecionada'
}

export { list }

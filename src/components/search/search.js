import axios from 'axios'
import { config } from '../utils/config'
import { data } from '../data/data'
import { company } from '../company/company'
import { list } from '../list/list'

const search = {
  init: () => search.eventListener(),
  query: symbol => {
    return axios.get(config.api, {
      params: {
        symbol: symbol + '.sa',
        apikey: config.apiKey
      }
    })
    .then(resp => search.getCompany(resp.data))
    .catch(error => error)
  },
  getCompany: data => {
    const company = data['Global Quote']

    return {
      symbol: company['01. symbol'],
      currentPrice: parseFloat(company['05. price'])
    }
  },
  getInputValue: element => element.value,
  eventListener: () => document.querySelector('.search__button').addEventListener('click', async () => {
    const input = document.querySelector('.search__input')
    const inputValue = search.getInputValue(input)
    const company = await search.query(inputValue)
    input.value = ''

    search.render(company.symbol)
    search.save('.search-item__symbol', '.search-item__percent', company.currentPrice)
  }),
  save: (symbol, percent, currentPrice) => {
    document.querySelector('.search-item__button').addEventListener('click', () => {
      const symbolValue = document.querySelector(symbol).textContent
      const percentValue = document.querySelector(percent).value
      const getDataCompany = data.get()
      const newCompany = {
        symbol: symbolValue,
        currentPrice: currentPrice,
        currentPercent: parseFloat(percentValue ? percentValue : 0)
      }

      company.save(getDataCompany, newCompany)
      list.init()
    })
  },
  render: (symbol, element = document.querySelector('.search__list')) => (
    element.innerHTML = `
      <div class="search-item">
        <span class="search-item__symbol">${symbol}</span>
        <input class="search-item__percent" type="text" placeholder="ex: 10" />
        <button class="search-item__button">participação recomendada</button>
      </div>
    `
  )
}

export { search }

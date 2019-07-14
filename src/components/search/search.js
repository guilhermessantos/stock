import axios from 'axios'
import { config } from '../utils/config'
import { $q } from '../utils/utils'

const search = {
  query: symbol => {
    return axios.get(config.api, {
      params: {
        symbol: symbol + '.sa',
        apikey: config.apiKey
      }
    })
    .then(resp => resp.data).catch(() => {console.log('Error company search')})
  },
  renderResult: symbol => `<li class="search__item">${symbol}</li>`,
  getValueInput: (element = $q('search__input')) => element.value,
  eventListener: () => document.querySelector('.search__button').addEventListener('click', search.render.bind(this)),
  render: async () => {
    const valueInput = search.getValueInput()
    const query = await search.query(valueInput)

    $q('search__list').innerHTML = search.renderResult(query['Global Quote']['01. symbol'])
  }
}

export { search }

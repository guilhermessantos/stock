import { mock, mockCompany } from './__mock__'
import axios from 'axios'
import { search } from './search'

jest.mock('axios')

describe('Search', () => {
  it('Should return company `CNTO3`', () => {
    const resp = { data: mock }
    axios.get.mockResolvedValue(resp)

    return search.query('CNTO3').then(data => expect(data).toEqual(mockCompany))
  })

  it('Should return object company', () => {
    expect(search.getCompany(mock)).toEqual(mockCompany)
  })

  it('Should return input value', () => {
    const element = document.createElement('input')
    element.value = 'CNTO3'

    expect(search.getInputValue(element)).toEqual('CNTO3')
  })

  it('Should return company item render', () => {
    const symbol = 'CNTO3'
    const element = document.createElement('div')
    const item = `
      <div class="search__item">
        <span class="search__symbol">${symbol}</span>
        <input class="search__percent" type="text" />
        <button class="search-item__button">salvar</button>
      </div>
    `

    expect(search.render(symbol, element)).toEqual(item)
  })
})

import axios from 'axios'
import { search } from './search'

jest.mock('axios')

describe('Search', () => {
  const symbol = 'ITSA4'

  it('should return data API', () => {
    const company = {
      "Global Quote": {
        "01. symbol": symbol,
        "02. open": "13.2400",
        "03. high": "13.2700",
        "04. low": "13.0000",
        "05. price": "13.0000",
        "06. volume": "31247200",
        "07. latest trading day": "2019-07-12",
        "08. previous close": "13.2000",
        "09. change": "-0.2000",
        "10. change percent": "-1.5152%"
      }
    }

    const resp = { data: company }
    axios.get.mockResolvedValue(resp)

    return search.query(symbol).then(data => expect(data).toEqual(company))
  })

  it('Should display search result element', () => {
    const el = `<li class="search__item">${symbol}</li>`

    expect(search.renderResult(symbol)).toEqual(el)
  })

  it('should return value input search', () => {
    const input = document.createElement('input')
    input.value = symbol

    expect(search.getValueInput(input)).toEqual(symbol)
  })
})

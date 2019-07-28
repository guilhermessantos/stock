import { mockCompanies, mockNoCompanies, mockITSA4 } from './__mock__'
import { company } from '../company/company'

describe('Company', () => {
  it('Should to include company `ITSA4` in companies array', () => {
    expect(company.save(mockNoCompanies, mockITSA4)).toEqual(mockNoCompanies)
  })

  it('Should to remove company `ITSA4` and `CNTO3` in companies array', () => {
    const data = {
      contribution: 1200,
      companies: [
        {
          symbol: 'CNTO3',
          currentPrice: 1000,
          currentPercent: 5
        }, {
          symbol: 'MGLU3',
          currentPrice: 1000,
          currentPercent: 5
        }
      ]
    }

    const data2 = {
      contribution: 1200,
      companies: [
        {
          symbol: 'MGLU3',
          currentPrice: 1000,
          currentPercent: 5
        }
      ]
    }

    expect(company.remove(mockCompanies, 'ITSA4')).toEqual(data)
    expect(company.remove(data, 'CNTO3')).toEqual(data2)
  })
})

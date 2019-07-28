import { contribution } from './contribution'

describe('Contribution', () => {
  it('Should to save contribution value', () => {
    const data = {
      contribution: 0,
      companies: []
    }

    expect(contribution.save(data, 'isnumber')).toEqual(data)
    expect(contribution.save(data, 300)).toEqual(data)
  })
})

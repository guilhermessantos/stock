import { data } from '../data/data'

const contribution = {
  init: () => {
    const getValue = contribution.get(data.get())
    contribution.eventListener()

    return contribution.render(getValue)
  },
  save: (db, value) => {
    value ? db.contribution = parseInt(value) : db

    return data.save(db)
  },
  get: db => db ? db.contribution : 0,
  eventListener: () => {
    const input = document.querySelector('.contribution__input')

    document.querySelector('.contribution__button').addEventListener('click', () => {
      contribution.render(input.value)
      contribution.save(data.get(), input.value)
      input.value = ''
    })
  },
  render: value => document.querySelector('.contribution__value').innerHTML = `R$ ${value}`
}

export { contribution }

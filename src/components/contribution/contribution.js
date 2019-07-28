const contribution = {
  save: (data, value) => {
    const isNumber = typeof value == 'number'
    isNumber ? data.contribution = value : data

    return data
  }
}

export { contribution }





/* import { $q } from '../utils/utils'
import { list } from '../list/list'

const contribution = {
  init: () => {
    contribution.hasValue()
    contribution.eventListener()
  },
  getValueData: () => list.getLocal().contribution,
  hasValue: () => contribution.getValueData() ? contribution.save(contribution.getValueData()) : contribution.save(0),
  getValue: (element = $q('contribution__input')) => element.value,
  eventListener: () => $q('contribution__button').addEventListener('click', () => contribution.render()),
  save: (value, element = $q('contribution__value')) => {
    const data = list.getLocal()

    data.contribution = value
    list.setLocal(data)
    element.innerHTML = `R$ ${value}`
    list.init()
  },
  render: () => {
    contribution.save(contribution.getValue())
  }
}

export { contribution } */

import { data } from '../data/data'
import { company } from '../company/company'

const list = {
  init: () => list.companies(data.get()),
  companies: db => db.companies.length ? list.render(db) : list.alert('Not have companies register'),
  alert: (msg, element = document.querySelector('.list')) => element.innerHTML = msg,
  sumPercent: db => {
    let total = 0

    db.companies.map(item => {
      total += item.currentPercent
    })

    return total
  },
  remove: (element, db) => {
    const buttonRemove = document.querySelectorAll(element)

    Array.from(buttonRemove).forEach(el => {
      el.addEventListener('click', event => {
        const symbol = event.target.getAttribute('data-company-name')

        company.remove(db, symbol)
        list.init()
      })
    })
  },
  render: (db, element = document.querySelector('.list')) => {
    const sumPercent = list.sumPercent(db)
    const contributionDb = data.get().contribution
    const amount = []

    const companies = db.companies.map(company => {
      let currentPrice = company.currentPrice
      const percent = company.currentPercent / sumPercent * 100
      const contribution = percent * contributionDb / 100

      for(let i = currentPrice; i <= contribution; i += currentPrice) {
        amount.push(i)
      }

      return `
        <div class="company">
          <div class="company__symbol">${company.symbol}</div>
          <div class="company__current-price">R$ ${currentPrice}</div>
          <div class="company__current-percent">${company.currentPercent}%</div>
          <div class="company__percent">${parseInt(percent)}%</div>
          <div class="company__contribution">R$ ${parseInt(contribution)}</div>
          <div class="company__amount">${amount.length}</div>
          <div>
            <button class="company__remove" data-company-name="${company.symbol}">X</button>
          </div>
        </div><hr/>
      `
    }).join('')

    element.innerHTML = companies
    list.remove('.company__remove', db)
  }
}

export { list }

import { data } from '../data/data'

const list = {
  init: () => list.companies(data.get()),
  companies: db => db.companies.length ? list.render(db) : list.alert('Not have companies register'),
  alert: (msg, element = document.querySelector('.list')) => element.innerHTML = msg,
  render: (db, element = document.querySelector('.list')) => {
      const companies = db.companies.map(company => {
      const percent = company.percent ? company.percent : 0
      const contribution = company.contribution ? company.contribution : 0
      const amout = company.amount ? company.amount : 0

      return `
        <div class="company">
          <div class="company__symbol">${company.symbol}</div>
          <div class="company__current-price">R$ ${company.currentPrice}</div>
          <div class="company__current-percent">${company.currentPercent}%</div>
          <div class="company__percent">${percent}%</div>
          <div class="company__contribution">R$ ${contribution}</div>
          <div class="company__amount">${amout}</div>
        </div><hr/>
      `
    }).join('')

    return element.innerHTML = companies
  }
}

export { list }

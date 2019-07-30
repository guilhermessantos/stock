import { data } from '../data/data'

const company = {
  save: (db, dataCompany) => {
    db.companies.push(dataCompany)
    data.save(db)

    return db
  },
  remove: (db, dataCompany) => {
    db.companies = db.companies.filter(el => el.symbol !== dataCompany)
    data.save(db)

    return db
  }
}

export { company }

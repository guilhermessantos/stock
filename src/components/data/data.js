const data = {
  company: {
    contribution: 0,
    companies: []
  },
  init: () => data.get() ? data.get() : data.save(data.company),
  get: () => JSON.parse(localStorage.getItem('data')),
  save: db => localStorage.setItem('data', JSON.stringify(db))
}

export { data }


import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import GlobalStyle from '../styles/global'
import { Contribute } from '../components/contribute'
import { SearchCompany } from '../components/search-company'
import { TableParticipation } from '../components/table-participation'

const Home = () => {
  const [value, setValue] = useState('R$ 0')
  const [companyValue, setCompanyValue] = useState([])
  const [contributeTotal, setContributeTotal] = useState(0)

  useEffect(() => {
    const storageCompanies = localStorage.getItem('companies')
    const storageValue = localStorage.getItem('value')

    storageCompanies && setCompanyValue(JSON.parse(storageCompanies))
    storageValue && setValue(`R$ ${storageValue}`)
  }, [])

  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companyValue))
  }, [companyValue])

  useEffect(() => {
    localStorage.setItem('value', value.replace(/R\$/, ''))
  }, [value])

  const handleCompany = company => {
    setCompanyValue([...companyValue, company])
  }

  const handleValue = contribute => {
    setValue(contribute)
  }

  const handleContributeTotal = value => {
    setContributeTotal(value)
  }

  return (
    <>
      <Head>
        <title>Stock | Github</title>
      </Head>
      <Contribute handleValue={handleValue} contribute={value} contributeTotal={contributeTotal} />
      <SearchCompany handleCompany={handleCompany} />
      <TableParticipation companies={companyValue} contribute={value.replace(/R\$/, '')} handleContributeTotal={handleContributeTotal} />
      <GlobalStyle />
    </>
  )
}

export default Home

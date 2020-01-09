import React, { useRef, useState, useEffect } from 'react'
import Head from 'next/head'
import { FaGithub, FaSyncAlt } from 'react-icons/fa'
import GlobalStyle from '../styles/global'
import { Contribute } from '../components/contribute'
import { SearchCompany } from '../components/search-company'
import { TableParticipation } from '../components/table-participation'
import { Button } from '../components/button'

const Home = () => {
  const refInputSymbol = useRef(0)
  const [value, setValue] = useState('R$ 0')
  const [companyValue, setCompanyValue] = useState([])
  const [contributeTotal, setContributeTotal] = useState(0)
  const [load, setLoad] = useState(true)
  const [loadUpdate, setLoadUpdate] = useState({load: false, symbol: ''})
  const [openOptionsRemove, setOptionsRemove] = useState(false)

  useEffect(() => {
    const storageCompanies = localStorage.getItem('companies')
    const storageValue = localStorage.getItem('value')

    storageCompanies && setCompanyValue(JSON.parse(storageCompanies))
    storageValue && setValue(`R$ ${storageValue}`)
    setLoad(false)
  }, [])

  useEffect(() => {
    localStorage.setItem('companies', JSON.stringify(companyValue))
    refInputSymbol.current.focus()
  }, [companyValue, loadUpdate])

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

  const handleRemoveCompany = symbol => {
    setCompanyValue(companyValue.filter(item => item.symbol !== symbol))
  }

  const handleUpdateCompany = async symbol => {
    setLoadUpdate({
      load: true,
      symbol
    })
    const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.sa&apikey=B0RKSSJH2TS1VNXF`)
    const data = await response.json()
    const convertPrice = (Math.round(data['Global Quote']['05. price'] * 100) / 100).toFixed(2)

    for (let i in companyValue) {
      if (companyValue[i].symbol == symbol) {
        companyValue[i].price = parseFloat(convertPrice)
      }
    }

    setCompanyValue(companyValue)
    setLoadUpdate({
      load: false,
      symbol
    })
  }

  return (
    <>
      <Head>
        <title>Stock | Github</title>
      </Head>
      <Contribute handleValue={handleValue} contribute={value} contributeTotal={contributeTotal} />
      <SearchCompany refProp={refInputSymbol} handleCompany={handleCompany} />
      <TableParticipation
        companies={companyValue}
        contribute={value.replace(/R\$/, '')}
        handleContributeTotal={handleContributeTotal}
        handleRemoveCompany={handleRemoveCompany}
        handleUpdateCompany={handleUpdateCompany}
        loadUpdate={loadUpdate}
      />
      <a className="link_github" href="https://github.com/guilhermessantos/stock">
        <FaGithub size="18" />
      </a>
      {!!companyValue.length && (
        <div className='footer'>
          <div className={openOptionsRemove && 'show-options-remove'}>
            <span onClick={() => {
              setCompanyValue([])
              setOptionsRemove(false)
            }}>Sim</span>
            <span onClick={() => setOptionsRemove(false)}>Não</span>
          </div>

          <Button size='small' secondary onClick={() => setOptionsRemove(!openOptionsRemove)}>Remover todos ativos</Button>
        </div>
      )}
      <GlobalStyle />
      {load && <div className="load"><FaSyncAlt size="30" /></div>}
    </>
  )
}

export default Home

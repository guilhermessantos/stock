import React from 'react'
import GlobalStyle from '../styles/global'
import { Contribute } from '../components/contribute'
import { SearchCompany } from '../components/search-company'
import { TableParticipation } from '../components/table-participation'

const Home = () => (
  <>
    <Contribute />
    <SearchCompany />
    <TableParticipation />
    <GlobalStyle />
  </>
)

export default Home

import React from 'react'
import Main from '../component/main'
import withData from '../lib/apollo'
import Layout from '../component/layout'

export default withData(props => (
  <Layout>
    <Main/>
  </Layout>
))

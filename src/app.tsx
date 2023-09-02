import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Layout from '@/components/layout'

import Router from './router'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App

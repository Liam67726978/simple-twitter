import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import Layout from './layout/Layout'
import LoginPage from './pages/LoginPage'

export default function App() {
  return (
    <Layout className='justify-content-center'>
      <LoginPage />
    </Layout>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RegisterClient, TableClients, SearchGoogle } from './pages'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <SearchGoogle />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RegisterClient, TableClients } from './pages'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <TableClients />
  </React.StrictMode>
)

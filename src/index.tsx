import React from 'react'
import ReactDOM from 'react-dom/client'
import ResgisterClient from './pages/register/resgisterClient'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <ResgisterClient />
  </React.StrictMode>
)

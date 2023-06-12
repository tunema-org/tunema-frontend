import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/global.css'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)

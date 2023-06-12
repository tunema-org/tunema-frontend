import React from 'react'
import ReactDOM from 'react-dom/client'
import api from './api'
import './css/global.css'
import Router from './router'
import { useAuthStore } from './store/useAuthStore'

function Application() {
  const accessToken = useAuthStore((state) => state.accessToken)
  api.userApiClient.defaults.headers['Authorization'] = `Bearer ${accessToken}`
  api.soundApiClient.defaults.headers['Authorization'] = `Bearer ${accessToken}`

  return (
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Application />,
)

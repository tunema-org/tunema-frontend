import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/home'
import LandingPage from './pages/landing/landing'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/landing',
    element: <LandingPage />,
  },
])

export default router

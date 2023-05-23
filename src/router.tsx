import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import LandingPage from './pages/landing/landing'
import Sample from './components/sample'

export const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])

export default router

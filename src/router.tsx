import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import LandingPage from './pages/landing/landing'
import Library from './pages/library/library'
import Login from './pages/login/login'

export const router = createBrowserRouter([
  {
    path: '',
    element: <LandingPage />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/library',
    element: <Library />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router

import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import LandingPage from './pages/landing/landing'
import Library from './pages/library/library'
import Login from './pages/login/login'
import Register from './pages/register/register'

export const router = createBrowserRouter([
  {
    path: '/landing',
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
  {
    path: '/register',
    element: <Register />,
  },
])

export default router

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/home'
import LandingPage from './pages/landing/landing'
import Library from './pages/library/library'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Profile from './pages/profile/profile'
import Search from './pages/search/search'
import Favorites from './pages/favorites/favorites'
import ArtistDashboard from './pages/artist-dashboard/artist-dashboard'
import SampleCart from './pages/sample-cart/sample-cart'
import Checkout from './pages/checkout/checkout'

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
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/favorites',
    element: <Favorites />,
  },
  {
    path: '/artist-dashboard',
    element: <ArtistDashboard />,
  },
  {
    path: '/sample-cart',
    element: <SampleCart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
])

export default router

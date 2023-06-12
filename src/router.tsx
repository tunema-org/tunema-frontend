import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ArtistDashboard from './pages/artist-dashboard/artist-dashboard'
import Checkout from './pages/checkout/checkout'
import Favorites from './pages/favorites/favorites'
import Home from './pages/home/home'
import LandingPage from './pages/landing/landing'
import Library from './pages/library/library'
import Login from './pages/login/login'
import Profile from './pages/profile/profile'
import Register from './pages/register/register'
import SampleCart from './pages/sample-cart/sample-cart'
import Search from './pages/search/search'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/artist-dashboard" element={<ArtistDashboard />} />
        <Route path="/sample-cart" element={<SampleCart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router

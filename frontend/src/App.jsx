import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import LogIn from './pages/LogIn'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='px-2 sm:px-[4vw] md:px-[6vx], lg:px-[8vw]'>
      <Navbar />
      <Routes>
<Route path='/'element={<Home />} />
<Route path='/collection'element={<Collection />} />
<Route path='/about'element={<About />} />
<Route path='/contact'element={<Contact />} />
<Route path='/logIn'element={<LogIn />} />
<Route path='/orders'element={<Order />} />
<Route path='/place-order'element={<PlaceOrder />} />
<Route path='/product/product:Id'element={<Product />} />
<Route path='/cart'element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
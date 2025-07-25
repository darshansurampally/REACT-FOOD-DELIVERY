
import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/loginPopUp/LoginPopUp'

function App() {
  const [showLogin ,setShowLogin] = useState(false)
  return (
    <>
   {showLogin ? <LoginPopUp setShowLogin = {setShowLogin} /> : <></>}
    <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes >
      <Route path='/' element={<Home/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/order' element={<PlaceOrder/>} />
      <Route path='/' element={<Home/>} />

      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App

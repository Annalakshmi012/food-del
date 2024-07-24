import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Card from './pages/card/Card'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './components/footer/Footer'
import LoginPopUp from './components/Loginpopup/LoginPopUp'
import Verify from './pages/verify/verify'
import MyOrder from './pages/myorder/MyOrder'



const App = () => {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
       <Route path='/card' element={<Card/>}/>
       <Route path='/order' element={<PlaceOrder/>}/>
       <Route path='/verify' element={<Verify/>}/>
       <Route path='/myorders' element={<MyOrder/>}/>
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App

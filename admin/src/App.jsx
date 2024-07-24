import React from 'react'
import Navber from './components/Navber/Navber'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import { Add } from './components/pages/Add/Add'
import List from './components/pages/List/List'
import Order from './components/pages/Order/Order'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer/>
      <Navber/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
        <Route path='/add' element={<Add url={url}/>}/>
        <Route path='/list' element={<List url={url}/>}/>
        <Route path='/order' element={<Order url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App


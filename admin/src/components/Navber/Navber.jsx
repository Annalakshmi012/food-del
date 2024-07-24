import React from 'react'
import './Navber.css'
import {assets} from '../../assets/assets.js'

const Navber = () => {
  return (
    <div className='navber'>
      <img  className='logo' src={assets.logo} alt="" />
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navber

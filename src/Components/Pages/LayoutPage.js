import React from 'react'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Pricing from './Pricing/Pricing'
import Service from './Services/Services'
import Team from './Team1/Team'
import Features from './Features/Features'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Wave from './Wave/Wave'
import Setcolor from '../SetColor/Setcolor'
// import '../../index.css'
import '../../AllCss.css'


const Router = () => {
  return (
    <div className='State1'>
      <Navbar/>
      <Home/>
      <Service/>
      <Setcolor />
      <Features/>
      <Pricing/>
      <Team/>
      <Wave/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Router
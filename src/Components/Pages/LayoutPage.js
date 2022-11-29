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



const Router = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Service/>
      <Setcolor />
      <Features/>
      <Team/>
      <Pricing/>
      <Wave/>
      <Blog/>
      <Contact/>
    </div>
  )
}

export default Router
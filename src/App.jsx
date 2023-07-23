import React, { useEffect, useState } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Portfolio from './pages/Portfolio'
import News from './pages/News'
import Loader from './loader/Loader'
import Contact from './pages/Contact'


const App = () => {

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/service' element={ <Service /> } />
      <Route path='/portfolio' element={ <Portfolio /> } />
      <Route path='/news' element={ <News /> } />
      <Route path='/contact' element={ <Contact /> } />
    </Routes>

    )
}

export default App
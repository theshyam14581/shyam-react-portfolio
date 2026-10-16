import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Footer from './components/Footer'
import Contact from './components/Contact'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
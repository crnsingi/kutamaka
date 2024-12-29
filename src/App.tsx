import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from 'react-router-dom'
import Navbar from './components/Navbar'

const App: React.FC = () => { 
  return ( 
    <Router>
      <Navbar/>

    </Router>
  )

}
export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Switch } from 'react-router-dom'

const App: React.FC = () => { 
  return ( 
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />

      </Switch>

    </Router>
  )

}
export default App

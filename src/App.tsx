import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import { Switch } from 'react-router-dom'
import AddProduct from './pages/AddProduct'

const App: React.FC = () => { 
  return ( 
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/add-product" component ={AddProduct} />
      </Switch>
    </Router>
  );
};

export default App

import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
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

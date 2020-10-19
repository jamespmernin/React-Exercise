import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios';
import Paintings from './components/Paintings.jsx'
import PaintingsDetail from './components/PaintingsDetail'
import './App.css'

function App() {
  const [paintings, setPaintings] = useState([]);
  useEffect(() => {
    const getPaintings = async () => {
      const apiUrl = 'https://products-api-01.herokuapp.com/api/products';
      const res = await axios.get(apiUrl);
      setPaintings(res.data);
    }
    getPaintings();
  }, []);

  return (
    <div className="app">
      <nav><h1>ProductsApp</h1></nav>
      <Route exact path="/">
        <Paintings paintings={paintings} />
      </Route>
      <PaintingsDetail paintings={paintings} />
    </div>
  )
}

export default App
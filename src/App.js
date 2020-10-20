import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios';
import Paintings from './components/Paintings'
import PaintingsDetail from './components/PaintingsDetail'
import './App.css'

function App() {
  const [paintings, setPaintings] = useState([]); // Easier to change paintings using a state
  useEffect(() => {
    const getPaintings = async () => {
      const apiUrl = 'https://products-api-01.herokuapp.com/api/products';
      const res = await axios(apiUrl);
      setPaintings(res.data);
    }
    getPaintings();
  }, []);

  return (
    <div className="app">
      <nav>ProductsApp</nav>
      <Route exact path="/">
        <Paintings paintings={paintings} />
      </Route>
      <PaintingsDetail paintings={paintings} />
    </div>
  )
}

export default App
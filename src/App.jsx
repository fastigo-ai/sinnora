import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import ProductDetail from './components/ProductDetail ';
import NewArrivals from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/TopScrollBar';
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/product" element={<NewArrivals />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

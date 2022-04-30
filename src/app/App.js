import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './views/Home/Home';
import Form from './components/Categories/Form/Form';
import Sell from './views/Sell/Sell';
import MyAds from './views/MyAds/MyAds';
import Header from './layout/Header';

function App() {
  return (

    <BrowserRouter>
      
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/sell' element={<Sell />} />
        <Route path='/myads' element={<MyAds />} />

      </Routes>


    </BrowserRouter>

  )
}
export default App
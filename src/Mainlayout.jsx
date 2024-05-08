import React from 'react'
import TopBar from './Topbar/TopBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import AllProducts from './Products/AllProducts';
import ProductDetail from './Products/Details/ProductDetail';

export default function Mainlayout(props) {
  return (
    <div>
        <TopBar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/viewProducts' element={<AllProducts />}></Route>
          <Route path='/product/:id/view' element={<ProductDetail />}></Route>
        </Routes>
    </div>
  )
}

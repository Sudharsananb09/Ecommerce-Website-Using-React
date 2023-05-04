import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Product from '../pages/Product'
import Shop from '../pages/Shop'
import Signup from '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
        <Route path='cart' element = {<Cart />}/>
        <Route path='checkout' element = {<Checkout />}/>
        <Route path='home' element = {<Home />}/>
        <Route path='login' element = {<Login />}/>
        <Route path='shop/:id' element = {<Product />}/>
        <Route path='shop' element = {<Shop />}/>
        <Route path='Signup' element = {<Signup />}/>
    </Routes>
  )
}

export default Routers
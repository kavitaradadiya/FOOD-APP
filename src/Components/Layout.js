import React from 'react'
import Header from './Header'
import  Router  from '../Routes/Router'
import Footer from './Footer'
import Carts from '../Pages/Cart/Carts'
import {useSelector} from 'react-redux'
// import CartsItem from '../Pages/Cart/CartsItem'

export default function Layout() {

  const Cart = useSelector(state => state.cartUi.cartVisible)

  return (
    <div>
      {
        Cart === true ? <Carts></Carts> : null
      }
        <Header></Header>
        <div>
            <Router></Router>
        </div>
        <Footer></Footer>
    
      
    </div>
  )
}

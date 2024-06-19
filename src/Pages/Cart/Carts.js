import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'reactstrap'
import {useSelector, useDispatch} from 'react-redux'
import { cartUiAction } from '../../Store/Slice/CartSliceUI'
import CartsItem from './CartsItem'



export default function Carts() {

    const dispatch = useDispatch()
    const cartToggle = () =>{
    dispatch(cartUiAction.toggle())
  }

    const CartsItems = useSelector(state => state.cart.cartItems)

    const TotalAmount = useSelector(state => state.cart.totalAmount)

    console.log("cartItems",CartsItems);
  return (
    <div className='cart_container'>
        <ListGroup className='cart position-fixed'>
            <div className='cart_close' onClick={cartToggle}>
                <span><i class="ri-close-fill"></i></span>
            </div>
            <div className='cart_item-list'>
               {
                CartsItems.length === 0 ? (<h5 className='text-center cart_empty'>Your Cart is Empty</h5>):(
                  CartsItems.map((item)=>{
                    return <CartsItem items={item}></CartsItem>
                  })
                )
               }
            </div>
            <div className='cart_bottom d-flex align-items-center justify-content-between'>
                <h6>SubTotal amount :<span>${TotalAmount}</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
  )
}

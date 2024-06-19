// import { createAction } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {cartAction} from '../../Store/Slice/CartSlice'


export default function ProductCard(props) {
  // console.log (props.items);
  const dispatch = useDispatch()

  const addToCart = () =>{
    // alert('kjdi')
    dispatch(cartAction.addItem({
      id,title,price,image01
    }))
  }
  const {id,title,price,image01} = props.items
  return (
    <div>
      <div className="card mt-2">
      <Link to={`/foods/${id}`}><img src={image01} alt='Product Img' className='img-fluid w-50 mx-auto d-block'></img></Link>
        <div className="card-body">
        <h5 className='text-center pb-4'><Link to={`/foods/${id}`} className='product_item'>{title}</Link></h5>
          <div className='d-flex align-items-center justify-content-between'>
            <span className=''>${price}</span>
            <button className='btn btn-danger' onClick={addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

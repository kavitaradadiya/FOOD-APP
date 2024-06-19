import React from 'react'
import { ListGroup } from 'reactstrap'
import { useDispatch} from 'react-redux'
import {cartAction} from '../../Store/Slice/CartSlice'



export default function CartsItem(props) {
    // console.log("cart Item",props.items);
    const { id,title,image01,price,totalprice,quantity } = props.items

    const dispatch = useDispatch()
    const addItem = () =>{
        // alert('kjdi')
        dispatch(cartAction.addItem({
          id,title,price,image01
        }))
      }
      const removeItem = () =>{
        // alert('kjdi')
        dispatch(cartAction.removeItem({
          id,title,price,image01
        }))
      }
      const deleteItem = () =>{
        // alert('kjdi')
        dispatch(cartAction.deleteItem({
          id,title,price,image01
        }))
      }

      // const CartItem = useSelector(state => state.cart.cartItems)

  return (
    <div>
        <ListGroup className='border-0 cart_item'>
            <div className='cart_item-info d-flex gap-2 ps-3 mt-2'>
                <img src={image01} alt=''></img>
           
            <div className='cart_product-info w-100 d-flex align-item-center justify-content-between gap-4'>
                <div>
                    <h6 className=' cart_product-title'>{title}</h6>
                    <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity}x<span>${totalprice}</span></p>

                    <div className='d-flex align-item-center justify-content-between increase_decrease-btn'>
                        <span className='increase_btn' onClick={addItem}><i class="ri-add-line"></i></span>
                        <span className='quantity'>{quantity}</span>
                        <span className='decrease_btn' onClick={removeItem}><i class="ri-subtract-line"></i></span>
                    </div>
                </div>
                <span className='delete_btn'><i class="ri-close-circle-fill" onClick={deleteItem}></i></span>
                
            </div>
            </div>
        </ListGroup>
    </div>
  )
}

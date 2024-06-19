import React from 'react'
import CommanSection from '../Components/CommanSection'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../Store/Slice/CartSlice';
import { Link } from 'react-router-dom';

export default function Cart() {

  const CartItem = useSelector(state => state.cart.cartItems)

  const totalAmount = useSelector(state => state.cart.totalAmount)

  const dispatch = useDispatch();

  const deleteItem =((id) => {
    dispatch(cartAction.deleteItem({id}))
  })

  return (
    <div>
      <div>
        <CommanSection title='Cart'></CommanSection>
      </div>
      <section className='container mt-5'>
        <div className='row'>
          <div className='col-lg-12'>

            {
              CartItem.length === 0 ?(<h3 className='text-center text-danger'>Your Cart Is Empty</h3>) : (
                <table className='table table-bordered'>
                <thead>
                <tr>
                  <th>Image</th>
                  <th>Product Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                  {
                    CartItem.map((item) =>{
                      return <Tr key={item.id} items= {item} delete = {deleteItem}></Tr>
                    })
                  }
                </tbody>
              </table>
              )
            }
           
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='row'>
            <div className='col-lg-6'>
              <h3>Subtotal : ${totalAmount}</h3>
              <p>Taxes and shipping will calculate at chekout</p>
              <button className='btn btn-danger me-2'><Link to="/allfood" className='text-light text-decoration-none'>Continue Shipping</Link></button>
              <button className='btn btn-danger'><Link to="/checkout" className='text-light text-decoration-none'>Proceed to checkout</Link></button>
            </div>
        </div>
      </section>
    </div>
  )
}

const Tr = (props) =>{
  const {image01,title,price,quantity,id} = props.items
  return(
    <tr>
      <td className='text-center'><img src={image01} alt='' style={{width:'40px'}}></img></td>
      <td className='text-center'>{title}</td>
      <td className='text-center'>${price}</td>
      <td className='text-center'>{quantity}</td>
      <td className='text-center' onClick={() =>props.delete(id)}><i class="ri-delete-bin-6-line"></i></td>
    </tr>
  )
}

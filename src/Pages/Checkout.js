import React from 'react'
import CommanSection from '../Components/CommanSection'
import { useSelector } from 'react-redux'

export default function Checkout() {

  const totalAmount = useSelector(state => state.cart.totalAmount)

  var shipping = 25

  var Total = totalAmount + shipping

  return (
    <div>
      <div>
        <CommanSection title="Checkout"></CommanSection>
      </div>
      <section className='container mt-4'>
        <div className='row'>
          <div className='col-lg-8'>
            <h6>Shipping Address</h6>
            <form>
              <input type='text' className='form-control mb-3' placeholder='Enter your name'></input>
              <input type='email' className='form-control mb-3' placeholder='Enter your Email'></input>
              <input type='number' className='form-control mb-3' placeholder='Phone number'></input>
              <input type='text' className='form-control mb-3' placeholder='Country'></input>
              <input type='text' className='form-control mb-3' placeholder='City'></input>
              <input type='number' className='form-control mb-3' placeholder='Postal Code'></input>
              <button className='btn btn-danger'>Payment</button>
            </form>
          </div>
          <div className='col-lg-4 mt-3'>
            <h5 className='mb-2'>Subtotal:<span className='text-danger ps-2'>${totalAmount}</span><span className='fs-6 ps-2'>CartTotalAmount</span></h5>
            <h5 className='mb-2'>Shipping:<span className='text-danger ps-2'>${shipping}</span><span className='fs-6 ps-2'>Shipping Cost</span></h5>
            <h5 className='mb-2'>Total:<span className='text-danger ps-2'>${Total}</span><span className='fs-6 ps-2'>TotalAmount</span></h5>
          </div>
        </div>
      </section>
    </div>
  )
}

// import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { cartUiAction } from '../Store/Slice/CartSliceUI'

export default function Header() {

  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch()
  const cartToggle = () =>{
    dispatch(cartUiAction.toggle())
  }

  return (
    <div>
        <section className='container-fluid'>
            <div className='row'>

                <div className='col-lg-4 col-md-4 col-sm-4 mt-3'>
                    <img src='assets/img/res-logo.png' alt='' className='img-fluid mx-auto d-block logo'></img>
                    <h5 className='text-center fw-bold'>Tasty treat</h5>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center'>
                  <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                      <button className="navbar-toggler drop-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                          <li className="nav-item">
                            <Link className="nav-link text-danger" to="/">Home</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link text-dark" to="/allfood">Foods</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link text-dark" to="/cart">Cart</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link text-dark" to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

                <div className='col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center gap-3 mt-5'>
                  <span className='cart_icon' onClick={cartToggle}>
                    <i className="ri-shopping-bag-4-line fs-4 position-relative"></i>
                    <span className="position-absolute top-45 start-20 translate-middle badge rounded-pill bg-danger p-1">{totalQuantity}</span>

                  </span>

                  <span className='cart_icon'>
                    <i className="ri-user-3-line fs-4"></i>
                  </span>
                </div>
            </div>  
        </section>

    </div>
  )
}

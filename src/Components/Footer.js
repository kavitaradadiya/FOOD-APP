import React from 'react'

export default function Footer() {
  return (
    <div>
      <section className='container-fluid bg-light mt-6 pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-6'>
              <img src='assets/img/res-logo.png' alt='' className='img-fluid logo ms-3'></img>
              <h5 className='text-right fw-bold'>Tasty treat</h5>
              <p className='text-right'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-6'>
              <h4>Delivery Time</h4>
              <p className='fw-bold p-0 m-0 pt-2'>Sunday - Thursday</p>
              <p>10:00am - 11:00pm</p>
              <p className='fw-bold p-0 m-0'>Friday - Saturday</p>
              <p>Off Day</p>
            </div>
            <div className='col-lg-4 col-md-4 col-sm-6'>
              <h4>Contact</h4>
              <p className='pt-2'>Location: XYZ, Varachha-395006,Surat</p>
              <p className='fw-bold p-0 m-0'>Phon:-7648936497</p>
              <p className='fw-bold'>Email: xyz@gmail.com</p>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-6'>
              <h4>Newsletter</h4>
              <p className='pt-2'>Subcribe our newsletter</p>
              <input type="text" className='form-control' placeholder='Enter your email'></input>
              <img src='assets/img/telegram.jpg' alt='' className='img-fluid w-25'></img>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

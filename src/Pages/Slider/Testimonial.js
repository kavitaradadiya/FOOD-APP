import React from 'react'
import Slider from "react-slick";
import ava01 from "../../Fakedata/images/ava-1.jpg"
import ava02 from "../../Fakedata/images/ava-2.jpg"
import ava03 from "../../Fakedata/images/ava-3.jpg"
import ava04 from "../../Fakedata/images/ava-4.jpg"

export default function Testimonial() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        autoplayspeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <Slider {...settings}>
      <div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava01} alt='' className='rounded w-25'></img>
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava02} alt='' className='rounded w-25'></img>
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava03} alt='' className='rounded w-25'></img>
          <h6>Jhon Doe</h6>
        </div>
      </div>
      <div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='d-flex align-items-center gap-3'>
          <img src={ava04} alt='' className='rounded w-25'></img>
          <h6>Jhon Doe</h6>
        </div>
      </div>
    </Slider>
  )
}

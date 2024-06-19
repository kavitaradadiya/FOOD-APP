import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './Category/ProductCard'
import products from '../Fakedata/products';
import Testimonial from './Slider/Testimonial';
import location from '../Fakedata/images/location.png'
import { AiOutlineCheckCircle } from "react-icons/ai";
import Helmet from '../Components/Helmet';

export default function Home() {

  const [category, setcategory] = useState("All");
  const [allProduct, setAllProduct] = useState(products);
  const [hotPizza, setHotPizza] = useState([])

    useEffect(()=>{

      if(category === "ALL"){
        setAllProduct(products)
      }
      if(category === "BURGER"){
        const FilterProduct = products.filter(item => item.category === "Burger")
        // console.log(FilterProduct);
        setAllProduct(FilterProduct)
      }
      if(category === "BREAD"){
        const FilterProduct = products.filter(item => item.category === "Bread")
        // console.log(FilterProduct);
        setAllProduct(FilterProduct)
      }
      if(category === "PIZZA"){
        const FilterProduct = products.filter(item => item.category === "Pizza")
        // console.log(FilterProduct);
        setAllProduct(FilterProduct)
      }

    },[category])
    // console.log(allProduct);

    // console.log(category);

    useEffect(()=> {
      const FilterPizza = products.filter(item => item.category === 'Pizza')
      const SlicePizza = FilterPizza.slice(0,4)

      // console.log(SlicePizza);
      setHotPizza(SlicePizza)
    },[])

   return <Helmet title= "Home">
    <div>

      <section className='container mt-4'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
            <div>
              <h5 className='fw-bold mb-2 mt-5'>Easy way to make an order</h5>
              <h2 className='fw-bold home-h2 mb-4'><span className='text-danger'>HUNGRY?</span> just wait food at your door</h2>
              <p className='mb-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <Link to="/allfood" className='btn btn-danger text-white ps-4 pe-4 me-4'>Order now</Link>
                <Link  to="" className='btn border-danger text-danger ps-4 pe-4'>See allfoods</Link>
              </div>
              <div className='mt-5'>
                <span className='me-3'>100% Secure Checkout</span>
                <span>No shipping charge</span>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img src="assets/img/hero.png" alt='' className='img-fluid hero'></img>
          </div>
        </div>
      </section>

      <section className='container mt-6'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6 bg-light pt-4 ps-5'>
            <p className=''><img src='assets/img/category-01.png' alt='' className='img-fluid me-3'></img> Fastfood</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 bg-light pt-4 ps-5'>
          <p><img src='assets/img/category-02.png' alt='' className='img-fluid me-3'></img>Pizza</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 bg-light pt-4 ps-5'>
          <p><img src='assets/img/category-03.png' alt='' className='img-fluid me-3'></img>Asian Food</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 bg-light pt-4 ps-5'>
          <p><img src='assets/img/category-04.png' alt='' className='img-fluid me-3'></img>Row meat</p>
          </div>
        </div>
      </section>

      <section className='container mt-6'>
        <div className='row'>
          <div className='text-center'>
            <h5 className='text-danger fw-bold'>What we serve</h5>
            <h2 className='fs-1 fw-bold'>Just sit back at home <br></br> we will <span className='text-danger'>take care</span></h2>
            <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </section>

      <section className='container mt-5'>
        <div className='row'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="">
              <img className="img-fluid mx-auto d-block w-25" src='assets/img/service-01.png' alt=""></img>
              <div className="card-body text-center">
                <h4 className="card-title">Quick Delivery</h4>
                <p className="card-text">Some example text to build on the card title and make up the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="">
              <img className="img-fluid mx-auto d-block w-25" src='assets/img/service-02.png' alt=""></img>
              <div className="card-body text-center">
                <h4 className="card-title">Super Dine In</h4>
                <p className="card-text">Some example text to build on the card title and make up the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div className="">
              <img className="img-fluid mx-auto d-block w-25" src='assets/img/service-03.png' alt=""></img>
              <div className="card-body text-center">
                <h4 className="card-title">Easy Pick Up</h4>
                <p className="card-text">Some example text to build on the card title and make up the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container mt-6'>
          <div className='text-center'>
            <h2>Popular Foods</h2>
          </div>
        <div className='row bg-danger pb-2 mb-4'>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <button className='btn  btn-light d-flex align-items-center ps-2 ms-5 pt-2 active mt-3' onClick={()=>setcategory("ALL")}>All</button>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <button className='btn d-flex align-items-center gap-2 pt-3'onClick={()=>setcategory("BURGER")}><img src='assets/img/hamburger.png' alt='burger'  width="25%"></img>Burger</button>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <button className=' btn d-flex align-items-center gap-2 pt-3'onClick={()=>setcategory("BREAD")}><img src='assets/img/bread.png' alt='bread' width="25%" ></img>Bread</button>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <button className=' btn d-flex align-items-center gap-2 pt-3'onClick={()=>setcategory("PIZZA")}><img  src='assets/img/pizza.png' alt='pizza' width="25%" ></img>Pizza</button>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className='row'>
         {
           allProduct.map((item) => {
            return<div className='col-lg-3 col-md-3'>
                <ProductCard items ={item}></ProductCard>
            </div>
          })
         }
        </div>
      </section>

      <section className='container mt-5'>
         <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src={location} alt='' className='img-fluid'></img>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 mt-5'>
              <h2>Why Tasty Treat ?</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <div className='mt-5'>
                <h6 className='fw-bold'><AiOutlineCheckCircle className='text-danger' /> Fresh and tasty foods</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h6 className='fw-bold'><AiOutlineCheckCircle className='text-danger' /> Quality support</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <h6 className='fw-bold'><AiOutlineCheckCircle className='text-danger' /> Order from any location</h6>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
         </div>
      </section>

      <section className='container mt-5'>
        <h2 className='text-center fw-bolder'>Hot Pizza</h2>
        <div className='row'>
         {
           hotPizza.map((item) => {
            return<div className='col-lg-3 col-md-3 key = {item.id}'>
                <ProductCard items ={item}></ProductCard>
            </div>
          })
         }
        </div>
      </section>

      <section className='container mt-5'>
         <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <h5 className='text-danger'>Testimonial</h5>
              <h2>What our <span className='text-danger'>customer</span> are saying</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

              <Testimonial></Testimonial>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <img src='assets/img/network.png' alt='' className='img-fluid'></img>
            </div>
         </div>
      </section>
      
      
    </div>
  
  </Helmet> 
}

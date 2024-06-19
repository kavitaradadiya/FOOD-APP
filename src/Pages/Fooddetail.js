import React, { useEffect, useState } from 'react'
import CommanSection from '../Components/CommanSection';
import { useParams } from 'react-router-dom';
// import Productimg from '../Fakedata/images/product_01.1.jpg'
import products from '../Fakedata/products';
import ProductCard from './Category/ProductCard'
import Helmet from '../Components/Helmet';


export default function Fooddetail() {

  const { id } = useParams()
  console.log(id);

  const Product = products.find(item => item.id === id)
  console.log(Product);

  const { title, price, category, desc, image01, image02, image03 } = Product;

  const [preImage, setPreImage] = useState(image01);

  const [tab, setTab] = useState('desc');

  const [allProduct, setAllProduct] = useState(products);

  useEffect(() => {

    if (category === "Burger") {
      const FilterProduct = products.filter(item => item.category === "Burger")
      // console.log(FilterProduct);
      setAllProduct(FilterProduct)
    }
    if (category === "Bread") {
      const FilterProduct = products.filter(item => item.category === "Bread")
      // console.log(FilterProduct);
      setAllProduct(FilterProduct)
    }
    if (category === "Pizza") {
      const FilterProduct = products.filter(item => item.category === "Pizza")
      // console.log(FilterProduct);
      setAllProduct(FilterProduct.slice(0, 4))
    }

  }, [category])
  console.log(allProduct);

  useEffect(() => {
    setPreImage(image01)
    window.scrollTo(0, 0)
  }, [])

  return <Helmet title = "Product Detail">
    <div>
      <section className='container-fluid p-0 m-0'>
        <CommanSection title={title}></CommanSection>
      </section>

      <section className='container'>
        <div className='row'>
          <div className='col-lg-2 col-md-2 col-sm-6 mt-5'>
            <div onClick={() => setPreImage(image01)}>
              <img src={image01} alt='' className='w-50'></img>
            </div>

            <div onClick={() => setPreImage(image02)}>
              <img src={image02} alt='' className='w-50'></img>
            </div>

            <div onClick={() => setPreImage(image03)}>
              <img src={image03} alt='' className='w-50'></img>
            </div>
          </div>

          <div className='col-lg-4 col-md-4 col-sm-6 mt-3'>
            <img src={preImage} alt='' className='img-fluid'></img>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-6 mt-5 ms-5'>
            <h2>{title}</h2>
            <p className='text-danger'>Price : <span className='fs-2'>${price}</span></p>
            <p>Category: <span className='pink-bg-clr ps-2 pe-2'>{category}</span></p>
            <button className='btn btn-danger mt-3'>Add to cart</button>
          </div>
        </div>
      </section>

      <section className='container'>
        <div className=' d-flex align-items-center gap-5 py-2'>
          <h6 className='text-danger' onClick={() => setTab('desc')}>Description</h6>
          <h6 onClick={() => setTab('review')}>Review</h6>
        </div>

        {
          tab === 'desc' ? (
            <div className='mt-5'>
              <p>{desc}</p>
            </div>
          ) : (
            <div className='mt-5'>
              <h5>Kavita</h5>
              <h6>kavi@gmail.com</h6>
              <p>Great Product</p>

              <h5>Kavita</h5>
              <h6>kavi@gmail.com</h6>
              <p>Great Product</p>

              <h5>Kavita</h5>
              <h6>kavi@gmail.com</h6>
              <p>Great Product</p>

              <div className='mb-3  pink-bg-clr w-50 pt-2 pb-2 mx-auto d-block'>
                <input type='text' className='form-control border-0 pink-bg-clr border-bottom mb-3' placeholder='Enter Your Name'></input>
                <input type='text' className='form-control border-0 pink-bg-clr border-bottom mb-3' placeholder='Enter Your Name'></input>
                <textarea rows="3" className='form-control border-0 pink-bg-clr border-bottom mb-3' placeholder='Enter Your Name'></textarea>
                <input type='submit' className='btn btn-danger ps-4 pe-4 ms-3'></input>
              </div>
            </div>
          )
        }
      </section>

      <section className='container'>
        <div className='row'>
          {
            allProduct.map((item) => {
              return <div className='col-lg-3 col-md-3'>
                <ProductCard items={item}></ProductCard>
              </div>
            })
          }
        </div>
      </section>

    </div>
  </Helmet>
  
}

import React, { useState } from 'react'
import ProductCard from './Category/ProductCard'
import products from '../Fakedata/products';
import CommanSection from '../Components/CommanSection';
import ReactPaginate from 'react-paginate';

export default function Allfood() {
  // const [allProduct] = useState(products);
  const [pageNumber, setPageNumber] = useState(0)

  const [searchProduct, setSearchProduct] = useState("")

  const productPerPage = 4;
  const visitedProduct = pageNumber * productPerPage;
  const displayProduct = products.slice(visitedProduct, visitedProduct + productPerPage)

  const pageCount = Math.ceil(products.length / productPerPage)

  const changepage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <div>

      <section className='container-fluid p-0 m-0'>
        <CommanSection title="All food"></CommanSection>
      </section>

      <section className='container mt-5 mb-5'>
        <div className='justify-content-between d-flex'>
          <div className=''>
            <input type='text' className='form-control' placeholder='i am looking for... ' value={searchProduct} onChange={(e) => setSearchProduct(e.target.value)}></input>
          </div>
          <div className=''>
            <select class="form-select">
              <option selected>Default</option>
              <option value="1">Alphabeticaly A-Z</option>
              <option value="2">Alphabeticaly Z-A</option>
              <option value="3">High Price</option>
              <option value="3">Low Price</option>
            </select>
          </div>
        </div>
      </section>
      <section className='container mt-5'>
        <div className='row'>
          {
            (searchProduct === '' ? displayProduct : products.filter((item) => {
              if (searchProduct === '' || item.title.toLowerCase(). includes(searchProduct.toLowerCase())){
                return item
              }
            })).map((item) => {
              return (<div className='col-lg-3 col-md-3'>
                <ProductCard items={item}></ProductCard>
              </div>)
            })
          }
        </div>
      </section>

      <section>
        <ReactPaginate pageCount={pageCount} onPageChange={changepage} className='paginationbtn'></ReactPaginate>
      </section>
    </div>
  )
}

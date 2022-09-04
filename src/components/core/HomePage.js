import React, { useEffect, useState } from 'react'
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap'
import HomeCarasoul from '../shared/HomeCarasoul'
//import products from '../../products.js'
import ProductItem from '../products/ProductItem'
import ProductList from '../products/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import Footer from './Footer'
import { showAllProducts } from '../../action/userAction'
import Loader from '../shared/Loader'

const HomePage = () => {
  const dispatch = useDispatch()
  const { productList, loading, error } = useSelector(
    (state) => state.showAllProducts
  )
  // console.log(productList)
  useEffect(() => {
    dispatch(showAllProducts())
  }, [showAllProducts])
  return (
    <Container>
      <main>
        <h1 className='my-3'>Latest products</h1>
        {loading && <Loader />}
        {productList && <ProductList products={productList} />}
      </main>
    </Container>
  )
}

export default HomePage

import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ProductItem from './ProductItem'

const ProductList = ({ category, products }) => {
  if (products.length === 0) {
    return (
      <section className='text-center'>
        <h2 className='text-muted my-4'>No products added yet</h2>
      </section>
    )
  } else {
    return (
      <section className='my-3'>
        <Row>
          {products.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <ProductItem product={product} />
              </Col>
            )
          })}
        </Row>
      </section>
    )
  }
}
export default ProductList

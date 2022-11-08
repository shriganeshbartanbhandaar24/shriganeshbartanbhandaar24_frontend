import React from 'react'
import { Row, Col, Card, Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Ratings from '../shared/Ratings'

const ProductItem = ({ product }) => {
  return (
    <Card className='my-3 p-2 rounded'>
      <LinkContainer to={`/product/${product._id}`}>
        <Card.Img src={product.image} top='top' />
      </LinkContainer>
      <Card.Body>
        <LinkContainer to={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </LinkContainer>
        <Card.Text as='div'>
          <Ratings
            value={product.rating}
            text={`${product.numReviews} reviews`}
            color='indigo'
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductItem

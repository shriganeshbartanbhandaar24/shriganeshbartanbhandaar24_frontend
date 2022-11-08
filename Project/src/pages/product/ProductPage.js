import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useParams } from 'react-router-dom'
import Ratings from '../../components/shared/Ratings'
import { getProductDetails } from '../../action/userAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/shared/Loader'
import { useHistory } from 'react-router-dom'

const ProductPage = () => {
  const [qty, setQty] = useState(1)

  const { id } = useParams()
  const history = useHistory()

  // console.log(location.href.search('?'))
  // console.log('id', id)
  const dispatch = useDispatch()

  const { productDetails, error, loading } = useSelector(
    (state) => state.getProductDetails
  )

  useEffect(() => {
    dispatch(getProductDetails(id))
    // console.log('EFFECT CALLED')
  }, [getProductDetails])

  // console.log('prodcu', productDetails)

  const addToCartHandler = () => {
    history.push(`/cart/${id}?qty=${qty}`)
  }

  return (
    <Container>
      <LinkContainer to='/'>
        <Button variant='dark' className='my-3 p-3'>
          Go Back
        </Button>
      </LinkContainer>
      {loading && <Loader />}
      {/* //{console.log('redender product detail', productDetails[0].image)} */}
      {productDetails && (
        <Row>
          <Col md={6}>
            <Image src={productDetails.image} alt={productDetails.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{productDetails.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Ratings
                  value={productDetails.rating}
                  text={`${productDetails.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price:${productDetails.price}</ListGroup.Item>
              <ListGroup.Item>
                Description:{productDetails.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price :</Col>
                    <Col>
                      <strong>${productDetails.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status</Col>
                    <Col>
                      <strong>
                        {productDetails.countInStock > 0
                          ? 'Available'
                          : 'Out Of Stock'}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {productDetails.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(productDetails.countInStock).keys()].map(
                            (x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )
                          )}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Row>
                    <Button
                      onClick={addToCartHandler}
                      className='btn-block'
                      type='button'
                      variant='dark'
                      disabled={productDetails.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default ProductPage

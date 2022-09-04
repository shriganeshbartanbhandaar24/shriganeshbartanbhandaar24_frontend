import React, { useEffect } from 'react'
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Nav,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory, useParams, Link } from 'react-router-dom'
import Message from '../../components/shared/Message'
import CheckoutSteps from './CheckoutSteps'

import { getOrderDetails } from '../../action/orderAction'

const OrderPage = () => {
  const dispatch = useDispatch()
  const { orderId } = useParams()
  const history = useHistory()

  const { loading, order, error } = useSelector((state) => state.orderDetails)

  if (!loading) {
    const addDecimal = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    //Calculate Price
    order.price = addDecimal(
      order.reduce((acc, item) => acc + item.qty * item.price, 0)
    )
  }

  useEffect(() => {
    dispatch(getOrderDetails(orderId))
  }, [history, orderId])

  console.log('cartItems', order)

  return loading ? (
    <p>Show loader</p>
  ) : error ? (
    <Message></Message>
  ) : (
    <>
      <h1>Order: {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name:</strong>
                {order.user.name}
              </p>
              <p>
                <strong>Email:</strong>
                <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
              </p>
              <p>
                <strong>Address</strong>
              </p>
              {order.isDelivered ? (
                <strong>Delivered on :{order.deliveredAt}</strong>
              ) : (
                <strong>Not Delivered </strong>
              )}
            </ListGroup.Item>
            {console.log('cart', order.shipping)}

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method:</strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <strong>Paid on :{order.paidAt}</strong>
              ) : (
                <strong>Not Paid</strong>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {!(order || order.length === 0) ? (
                <Message variant='info'>Your Cart is Empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {order.orderItems.map((item, index) => {
                    return (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={2}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            />
                          </Col>
                          <Col className='text-center pt-4'>
                            <LinkContainer to={`/product/${item.product}`}>
                              <Nav.Link>{item.name}</Nav.Link>
                            </LinkContainer>
                          </Col>
                          <Col md={4} className='pt-4'>
                            <strong>
                              {item.qty} X {item.price} = $
                              {item.qty * item.price}
                            </strong>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )
                  })}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shipping}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.tax}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderPage

import React, { useEffect } from "react"
import { Button, Card, Col, Image, ListGroup, Nav, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { useHistory } from "react-router-dom"
import { createOrder } from "../../action/orderAction"
import Message from "../../components/shared/Message"
import CheckoutSteps from "./CheckoutSteps"

const PlaceOrderPage = () => {
  const { cartItems, shippingAddress, paymentMethod } = useSelector(
    (state) => state.cart
  )
  console.log("cartItems", cartItems)
  console.log("payemnt method", paymentMethod)

  const dispatch = useDispatch()
  const history = useHistory()

  //const shippingAddress = localStorage.getItem("shippingAddress")

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }
  //Calculate Price
  cartItems.price = addDecimal(
    cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)
  )

  cartItems.shipping = addDecimal(cartItems.price > 1000 ? 0 : 30)

  //15% tax
  cartItems.tax = addDecimal(cartItems.price * 0.18)

  cartItems.totalPrice = (
    Number(cartItems.price) +
    Number(cartItems.shipping) +
    Number(cartItems.tax)
  ).toFixed(2)

  const { success, order, error } = useSelector((state) => state.createOrder)
  console.log("success", success)
  console.log("Order Id", order)
  console.log("Order Id in order", order)
  useEffect(() => {
    if (success) {
      console.log("Order in Use Effect", order)
      history.push(`/order/${order.createdOrder._id}`)
    }
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice: cartItems.itemsPrice,
        shippingPrice: cartItems.shippingPrice,
        tax: cartItems.tax,
        totalPrice: cartItems.totalPrice,
      })
    )
  }

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping Address</h2>

              <strong>
                <p>{shippingAddress.address}</p>
                <p>
                  {shippingAddress.city}-{shippingAddress.postalCode}
                </p>
                <p>{shippingAddress.country}</p>
              </strong>

              {console.log("shipping Address", shippingAddress)}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <div>
                <strong>
                  Method:
                  {paymentMethod}
                </strong>
              </div>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {!(cartItems || cartItems.length === 0) ? (
                <Message variant="info">Your Cart is Empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item, index) => {
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
                          <Col className="text-center pt-4">
                            <LinkContainer to={`/product/${item.product}`}>
                              <Nav.Link>{item.name}</Nav.Link>
                            </LinkContainer>
                          </Col>
                          <Col md={4} className="pt-4">
                            <strong>
                              {numberWithCommas(item.qty)} X{" "}
                              {numberWithCommas(item.price)} = $
                              {numberWithCommas(item.qty * item.price)}
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
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${numberWithCommas(cartItems.price)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${numberWithCommas(cartItems.shipping)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${numberWithCommas(cartItems.tax)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Grand Total</Col>
                  <Col>${numberWithCommas(cartItems.totalPrice)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  variant="dark"
                  className="w-100 py-3"
                  disabled={cartItems.length === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderPage

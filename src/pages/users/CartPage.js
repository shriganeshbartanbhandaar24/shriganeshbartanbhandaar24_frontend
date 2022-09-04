import React, { useEffect } from "react"
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Nav,
  Row,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { useHistory, useParams } from "react-router-dom"
import { addToCart, removeFromCart } from "../../action/CartAction"

const CartPage = () => {
  const { id } = useParams()
  const qty = window.location.search
    ? Number(window.location.search.split("qty=")[1])
    : 1
  // console.log('qty', qty)

  const dispatch = useDispatch()
  const history = useHistory()

  const { cartItems, loading, error } = useSelector((state) => state.cart)
  const { userInfo } = useSelector((state) => state.userLogin)
  console.log("Page cartItems", cartItems)

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [addToCart])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkOutHandler = () => {
    if (userInfo) {
      history.push("/shipping")
    } else {
      history.push("/users/login")
    }
  }

  const shopMoreHandler = (e) => {
    history.push("/")
  }

  return (
    <Container className="py-3">
      <Row>
        <Col md={8}>
          {cartItems && cartItems.length === 0 ? (
            <h3>Your Cart is Empty</h3>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} fluid alt={item.name} />
                    </Col>
                    <Col md={3}>
                      <LinkContainer to={`/product/${item.product}`}>
                        <Nav.Link>{item.name}</Nav.Link>
                      </LinkContainer>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        variant="dark"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className="fas fa-trash"></i> Remove Item
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Button
            variant="dark"
            className="my-3 py-3 w-100"
            onClick={shopMoreHandler}
          >
            Shop More!1!
          </Button>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </h2>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-block"
                  disabled={cartItems.length === 0}
                  onClick={checkOutHandler}
                >
                  Proceed To CheckOut
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CartPage

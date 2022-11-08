import React, { useEffect } from "react"
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Row,
  Table,
} from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { Redirect } from "react-router-dom"
import { listMyOrder } from "../../action/orderAction"

const UserDashboardPage = ({ history }) => {
  const dispatch = useDispatch()
  const { userInfo } = useSelector((state) => state.userLogin)

  const {
    loading,
    error: errorOrders,
    orders,
  } = useSelector((state) => state.orderMyList)

  useEffect(() => {
    if (!userInfo) {
      history.push("/users/login")
    } else if (!userInfo.name) {
      dispatch(listMyOrder())
    }
  }, [userInfo])

  return (
    <Container className="py-5">
      <Row className="py-5">
        <Col md={3}></Col>
        <Col md={9}>
          <h2>My Orders</h2>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>TOTAl</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th>EXPLORE</th>
              </tr>
            </thead>
            <tbody>
              {orders ? (
                <tr></tr>
              ) : (
                <tr>
                  <td>You haven't order anything yet</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <LinkContainer to="/showOrders">
            <Card>
              <Row style={{ marginLeft: "3px" }}>
                <h3>Your Order</h3>
                <p>track, return or buy things</p>
              </Row>
            </Card>
          </LinkContainer>
        </Col>
        <Col md={4}>
          <Card>
            <Row style={{ marginLeft: "3px" }}>
              <h3>Login & Security</h3>
              <p>password, privacy and credentials</p>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default UserDashboardPage

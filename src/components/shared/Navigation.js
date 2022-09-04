import React, { useEffect } from "react"
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"

import { userLogOut } from "../../action/userAction.js"

const Navigation = () => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.userLogin)

  const userLogoutHandler = () => {
    dispatch(userLogOut())
  }

  const renderNavigaitonLinks = () => {
    if (userInfo) {
      if (userInfo.user.isAdmin) {
        return (
          <>
            <LinkContainer to="/users/dashboard">
              <Nav.Link>Hi, {userInfo.user.name}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/userlist">
              <Nav.Link>Users</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/productlist">
              <Nav.Link>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/orderList">
              <Nav.Link>Orders</Nav.Link>
            </LinkContainer>
          </>
        )
      } else {
        return (
          <>
            <LinkContainer to="/users/dashboard">
              <Nav.Link>Hi, {userInfo.user.name}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fa-solid fa-cart-shopping"></i>Cart
                {/* <Badge bg="dark">0</Badge> */}
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/users/logout">
              <Nav.Link onClick={userLogoutHandler}>Log Out</Nav.Link>
            </LinkContainer>
          </>
        )
      }
    } else {
      return (
        <>
          <LinkContainer to="/about-us">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-us">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/addproduct">
            <Nav.Link>
              <i className="fa-solid fa-circle-plus"></i>Add Product
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cart">
            <Nav.Link>
              <i className="fa-solid fa-cart-shopping"></i>Cart
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users/signup">
            <Nav.Link>
              <i className="fa-solid fa-user"></i>Sign-Up
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users/login">
            <Nav.Link>
              <i className="fa-solid fa-circle-user"></i>Log-In
            </Nav.Link>
          </LinkContainer>
        </>
      )
    }
  }

  return (
    <Navbar className="py-4 shadow sticky-top" bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Shri Ganesh Traders</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>
                <i className="fa-solid fa-house"></i>Home
              </Nav.Link>
            </LinkContainer>

            {renderNavigaitonLinks()}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation

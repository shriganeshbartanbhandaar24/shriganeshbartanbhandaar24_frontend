import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import { userLogOut } from "../../action/userAction.js";

const Navigation = () => {
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.userLogin);

  const userLogoutHandler = () => {
    dispatch(userLogOut());
  };

  const renderNavigaitonLinks = () => {
    if (userInfo) {
      return (
        <>
          <LinkContainer to="/users/dashboard">
            <Nav.Link>Hi, {userInfo.user.firstName}</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users/logout">
            <Nav.Link onClick={userLogoutHandler}>Log Out</Nav.Link>
          </LinkContainer>
        </>
      );
    } else {
      return (
        <>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/addproduct">
            <Nav.Link>Add Product</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about-us">
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact-us">
            <Nav.Link>Contact Us</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users/signup">
            <Nav.Link>Sign-Up</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/users/login">
            <Nav.Link>Log-In</Nav.Link>
          </LinkContainer>
        </>
      );
    }
  };

  return (
    <Navbar className="py-4 shadow sticky-top" bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Shri Ganesh Traders</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{renderNavigaitonLinks()}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

const CategoryNavigation = () => {
  return (
    <Navbar
      className="shadow sticky-top"
      bg="dark"
      expand="lg"
      style={{ color: "white" }}
    >
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Pressure Cooker</Nav.Link>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CategoryNavigation;

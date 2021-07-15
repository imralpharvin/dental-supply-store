import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import { Link } from "gatsby"

const NavigationBar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Dental Supply Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/"
                style={{ color: "#F5F5F5", textDecoration: "none" }}
                activeStyle={{ color: "white", textDecoration: "underline" }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/products"
                style={{ color: "#F5F5F5", textDecoration: "none" }}
                activeStyle={{ color: "white", textDecoration: "underline" }}
              >
                Products
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/promotions"
                style={{ color: "#F5F5F5", textDecoration: "none" }}
                activeStyle={{ color: "white", textDecoration: "underline" }}
              >
                Promotions
              </Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavigationBar

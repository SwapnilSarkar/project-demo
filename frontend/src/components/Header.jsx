import React from "react";
import logo from "../assets/logo.png";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import {
  FaShoppingCart,
  FaUser,
  FaHome,
  FaInfoCircle,
  FaPhone,
  FaSearch,
} from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="JUstintime"></img>
              {/* JUstintime */}
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link
                  style={{ fontWeight: "bold" }}
                  className="text-uppercase text-success"
                >
                  Home <FaHome />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/aboutus">
                <Nav.Link
                  style={{ fontWeight: "bold" }}
                  className="text-uppercase text-success"
                >
                  About Us <FaInfoCircle />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contactus">
                <Nav.Link
                  style={{ fontWeight: "bold" }}
                  className="text-uppercase text-success"
                >
                  Contact Us <FaPhone />
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{ fontWeight: "bold" }}
                >
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <LinkContainer to="/products">
                    <Dropdown.Item
                      style={{ fontWeight: "" }}
                      className=" text-success"
                    >
                      Products
                    </Dropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/services">
                    <Dropdown.Item
                      style={{ fontWeight: "" }}
                      className=" text-success"
                    >
                      Services
                    </Dropdown.Item>
                  </LinkContainer>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            &emsp;
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <FaSearch />
              </Button>
            </Form>
            &emsp;
            <Nav className="nav-right-content">
              <LinkContainer to="/cart">
                <Nav.Link
                  style={{ fontWeight: "bold" }}
                  className="text-uppercase text-success"
                >
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link
                  href="/login"
                  style={{ fontWeight: "bold" }}
                  className="text-uppercase text-success"
                >
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

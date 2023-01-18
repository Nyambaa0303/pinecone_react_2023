import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  ">
            <Nav.Link
              style={({ isActive }) => ({
                background: isActive ? "red" : "none",
              })}
              to="/admin/home"
              as={NavLink}
              className="text-light"
            >
              Home
            </Nav.Link>
            <Nav.Link
              style={({ isActive }) => ({
                background: isActive ? "red" : "none",
              })}
              to="/admin/categories"
              as={NavLink}
              className="text-light"
            >
              Categories
            </Nav.Link>
            <Nav.Link
              style={({ isActive }) => ({
                background: isActive ? "red" : "none",
              })}
              to="/admin/about"
              as={NavLink}
              className="text-light"
            >
              About
            </Nav.Link>
            <Nav.Link
              style={({ isActive }) => ({
                background: isActive ? "red" : "none",
              })}
              to="/admin/contact"
              as={NavLink}
              className="text-light"
            >
              Contact US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          data-mdb-toggle="animation"
          data-mdb-animation-reset="true"
          data-mdb-animation="slide-out-right"
          variant="dark"
          className="  bg-white text-dark d-none d-lg-block"
        >
          Гарах
        </Button>
      </Container>
    </Navbar>
  );
}

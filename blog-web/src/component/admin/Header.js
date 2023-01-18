import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand to="/admin" as={Link} className="text-light">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto  ">
            <Nav.Link to="/admin/categories" as={Link} className="text-light">
              Categories
            </Nav.Link>
            <Nav.Link to="/admin/about" as={Link} className="text-light">
              About
            </Nav.Link>
            <Nav.Link to="/admin/contact" as={Link} className="text-light">
              Contact
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

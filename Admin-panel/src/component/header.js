import logo from "./logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

function Header() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <img src={logo} className="App-logo d-none d-lg-block" alt="logo" />
        <Navbar.Brand href="#home" className="text-light">
          Админ
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-light">
              Хэрэглэгч
            </Nav.Link>
            <Nav.Link to="/angilal" className="text-white-50">
              Ангилал
            </Nav.Link>
            <NavDropdown title="Мэдээ" id="basic-nav-dropdown">
              <NavDropdown.Item to="/about">Мэдээ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Сэтгэгдэл</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Шинэ Мэдээ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="text-secondary">
              Сэдэв
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="dark" className="bg-white text-dark d-none d-lg-block">
          Гарах
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;

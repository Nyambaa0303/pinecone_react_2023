import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../style/header.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Nav from "react-bootstrap/Nav";
import { BiUser } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
import { RiShoppingCart2Line } from "react-icons/ri";

export function Header() {
  return (
    <Navbar className="header">
      <Container style={{ maxWidth: "1200px" }} className="gap-5">
        <Navbar.Brand href="#">
          <img src="/images/logo 1.png" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Nav className="me-auto my-2 my-lg-0 ">
          <InputGroup className="bg-white rounded-4" id="search">
            <Form.Control
              className="border-0 rounded-4"
              placeholder="Search any things"
            />
            <Button className="rounded-4 bg-warning border-0 text-white">
              Search
            </Button>
          </InputGroup>
        </Nav>

        <Nav className="user text-white">
          <BiUser className="icon" />
          <a href="#login" className="text-white mx-2">
            Sign in
          </a>
        </Nav>
        <Nav className="text-white">
          <BsHeart className="icon" />
        </Nav>
        <Nav className="text-white">
          <RiShoppingCart2Line className="icon" />
        </Nav>
      </Container>
    </Navbar>
  );
}

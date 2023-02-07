import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Articles } from "./Articles";
import { ArticlesNew } from "./ArticlesNew";
import Categories from "./Categories";
// import { Todos } from "./Todos";

export function AdminApp() {
  return (
    <>
      <AdminNavbar />

      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/" element={<Navigate to="/admin/categories" />} />
          <Route path="/categories" element={<Categories />} />
          {/* <Route path="/todos" element={<Todos />} /> */}
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/new" element={<ArticlesNew />} />
        </Routes>
      </div>
    </>
  );
}

function AdminNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">ADMIN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/admin/categories" as={NavLink}>
              Categories
            </Nav.Link>
            {/* <Nav.Link to="/admin/todos" as={NavLink}>
              Todo
            </Nav.Link> */}
            <Nav.Link to="/admin/articles" as={NavLink}>
              Articles
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

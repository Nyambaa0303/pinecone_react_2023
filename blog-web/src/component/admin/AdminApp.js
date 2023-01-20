import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import { Home } from "./Home";
import { Header } from "./Header";
import { Particless } from "../Particles";

export function AdminApp() {
  return (
    <>
      <Particless />
      <Header />
      <Container>
        <div style={{ maxWidth: 700, margin: "2rem auto", position: "fixed" }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route
              path="/categories"
              element={<div style={{ color: "white" }}>Categories app</div>}
            />
            <Route path="/about" element={<div>About app</div>} />
            <Route path="/contact" element={<div>Contact app</div>} />
          </Routes>
        </div>
      </Container>
    </>
  );
}

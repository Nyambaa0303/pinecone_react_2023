import { Link, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import { Home } from "./Home";
import { Header } from "./Header";

export function AdminApp() {
  return (
    <>
      <Header />

      <div style={{ maxWidth: 700, margin: "2rem auto" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<div>Categories app</div>} />
          <Route path="/about" element={<div>About app</div>} />
          <Route path="/contact" element={<div>Contact app</div>} />
        </Routes>
      </div>
    </>
  );
}

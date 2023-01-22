import { Link, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import { Edit } from "./edit";

// import { Particless } from "../Particles";

export function AdminApp() {
  return (
    <>
      {/* <Particless /> */}
      <Link to={"/admin/home"} element={<div>wellcome admin home</div>}>
        home
      </Link>
      <Container>
        <div style={{ maxWidth: 700, margin: "2rem auto", position: "fixed" }}>
          <Routes>
            <Route path="/admin" element={<div>wellcome admin home</div>} />
            <Route
              path="/admin/categories"
              element={<div style={{ color: "white" }}>Categories app</div>}
            />
            <Route path="/admin/about" element={<div>About app</div>} />
            <Route path="/admin/contact" element={<div>Contact app</div>} />
          </Routes>
        </div>
        <Edit />
      </Container>
    </>
  );
}

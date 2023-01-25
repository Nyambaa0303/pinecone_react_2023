import { Link, Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
// import { Edit } from "./edit";
import { AdminNavBar } from "./AdminNavBar";
import { Main } from "./Main";

// import { Particless } from "../Particles";

export function AdminApp() {
  return (
    <>
      {/* <Particless /> */}
      <AdminNavBar />
      <Container>
        <Link to={"/admin/"} element={<div>wellcome admin home</div>}>
          home
        </Link>
        <Main />

        {/* <Edit /> */}
      </Container>
    </>
  );
}

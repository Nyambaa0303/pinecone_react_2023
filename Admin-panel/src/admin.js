import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modals } from "./modals.js";
import { AdminList } from "./adminList.js";

function Admin() {
  const [editing, setEditing] = useState(false);

  function closeModal() {
    setEditing(false);
  }

  return (
    <>
      <div className="col-6 mx-auto mt-5 d-flex justify-content-between">
        <h2>Ангилал</h2>
        <Button variant="outline-primary" onClick={() => setEditing(true)}>
          Шинэ
        </Button>
      </div>
      <AdminList />
      <Modals show={editing} onClose={closeModal} />
    </>
  );
}
export default Admin;

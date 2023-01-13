import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Modals } from "./modals.js";
import { AdminList } from "./adminList";
import { v4 as uuidv4 } from "uuid";

function Admin() {
  const [admins, setAdmins] = useState([]);
  const [editing, setEditing] = useState(false);

  function closeModal() {
    setEditing(false);
  }

  function handleSave(text) {
    const newAdmin = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newAdmins = [newAdmin, ...admins];
    setAdmins(newAdmins);
  }

  function handleDelete(index) {
    if (window.confirm("Are you delete?")) {
      const newAdmins = [...admins];
      newAdmins.splice(index, 1);
      setAdmins(newAdmins);
    }
  }

  function handleUpdate(index, text) {
    const newAdmins = [...admins];
    newAdmins[index].text = text;
    setAdmins(newAdmins);
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

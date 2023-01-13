import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { AdminListItem } from "./adminListItem";
import { v4 as uuidv4 } from "uuid";
import { AdminNew } from "./adminNew";

function Admins() {
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
    console.log(text);
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

      <AdminNew onSave={handleSave} show={editing} onClose={closeModal} />
      {admins.map((admin, index) => (
        <div
          key={admin.id}
          className="row border rounded-3 p-4 mt-5 col-6 mx-auto  d-flex justify-content-between align-items-center"
        >
          <b className="col-none-12 col-lg-6">{admin.text}</b>
          <AdminListItem
            admin={admin}
            key={admin.id}
            onUpdate={(text) => handleUpdate(index, text)}
            onDelete={() => handleDelete(index)}
          />
        </div>
      ))}
    </>
  );
}
export default Admins;

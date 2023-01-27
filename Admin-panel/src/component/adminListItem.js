import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { AdminError } from "./adminError";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

export function AdminListItem({ admin, onUpdate, fetchData }) {
  const [editing, setEditing] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function handleDoneToggle() {
    setDone(!done);
  }

  function handleSave(text) {
    if (text === "") {
      setError("Task is empy!!!");
      onUpdate("");
    } else {
      onUpdate(text);
      setEditing(false);
      setError("");
    }
  }
  const onDelete = (id) => {
    if (window.confirm("Are you delete?")) {
      axios.delete(`http://localhost:4000/${id}`).then((response) => {
        fetchData();
      });
    }
  };

  if (editing) {
    return (
      <EditingItem
        defaultValue={admin.name}
        onCancel={() => setEditing(false)}
      />
    );
  }
  {
    return (
      <NormalItem
        onToggleDone={handleDoneToggle}
        done={done}
        admin={admin}
        onEdit={() => setEditing(true)}
        onDelete={onDelete}
      />
    );
  }

  function NormalItem({ onToggleDone, done, admin, onEdit, onDelete }) {
    return (
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <b style={{ textDecoration: done ? "line-through" : "none" }}>
          {admin.name}
        </b>
        <p>{admin.age}</p>

        <div className=" d-flex gap-2 flex-wrap">
          <Button variant="outline-secondary" onClick={onEdit}>
            Засах
          </Button>
          <Button
            variant="outline-primary"
            onClick={onToggleDone}
            onChange={done}
          >
            Хийсэн
          </Button>
          <Button
            variant="white"
            className="btn btn-outline-danger"
            onClick={() => onDelete(admin.id)}
          >
            Устгах
          </Button>
        </div>
      </div>
    );
  }

  function EditingItem({ onSave, onCancel, defaultValue }) {
    const [text, setText] = useState(defaultValue);

    function handleKeyUp(event) {
      if (event.code === "Enter") {
        onSave(text);
      }
    }

    function EditSave(id) {
      axios.put(`http://localhost:4000/${id}`, {
        name: text,
      });
      // .then((res) => {});
      fetchData();
      onCancel();
    }

    return (
      <div className="d-flex gap-3 justify-content-between">
        <InputGroup className="w-75">
          <Form.Control
            value={text}
            onChange={(event) => setText(event.target.value)}
            onKeyUp={handleKeyUp}
          />
          <AdminError error={error} />
        </InputGroup>

        <div className="d-flex gap-2  w-25">
          <Button variant="outline-secondary" onClick={() => onCancel()}>
            Буцах
          </Button>
          <Button variant="outline-primary" onClick={() => EditSave(admin.id)}>
            Хадгалах
          </Button>
        </div>
      </div>
    );
  }
}

import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { AdminError } from "./adminError";
import InputGroup from "react-bootstrap/InputGroup";

export function AdminListItem({ onDelete, admin, onUpdate }) {
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

  if (editing) {
    return (
      <EditingItem
        defaultValue={admin.text}
        onCancel={() => setEditing(false)}
        onSave={handleSave}
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
          {admin.text}
        </b>

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
            onClick={onDelete}
          >
            Устгах
          </Button>
        </div>
      </div>
    );
  }

  function EditingItem({ onSave, onCancel, defaultValue }) {
    const [text, setText] = useState(defaultValue);

    return (
      <div className="d-flex gap-3 justify-content-between">
        <inputGroup className="w-75">
          <Form.Control
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <AdminError error={error} />
        </inputGroup>

        <div className="d-flex gap-2  w-25">
          <Button variant="outline-secondary" onClick={() => onCancel()}>
            Буцах
          </Button>
          <Button variant="outline-primary" onClick={() => onSave(text)}>
            Хадгалах
          </Button>
        </div>
      </div>
    );
  }
}

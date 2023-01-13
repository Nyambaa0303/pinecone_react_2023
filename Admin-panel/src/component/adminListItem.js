import Button from "react-bootstrap/Button";
import { useState } from "react";

export function AdminListItem({ onDelete, admin, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [done, setDone] = useState(false);

  function handleDoneToggle() {
    setDone(!done);
  }

  function handleSave(text) {
    onUpdate(text);
    setEditing(false);
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
      <div
        className="d-flex gap-1 col-none-12 col-lg-6 justify-content-center"
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        {admin.text}
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
    );
  }

  function EditingItem({ onSave, onCancel, defaultValue }) {
    const [text, setText] = useState(defaultValue);

    return (
      <div>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button onClick={() => onCancel()}>bolih</button>
        <button onClick={() => onSave()}>hadgalah</button>
      </div>
    );
  }
}

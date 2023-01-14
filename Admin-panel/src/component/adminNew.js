import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { AdminError } from "./adminError";

export function AdminNew({ show, onClose, onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSave() {
    if (text === "") {
      setError("Task is empy !!!");
    } else {
      onSave(text);
      setText("");
      setError("");
      onClose();
    }
  }

  function handleKeyUp(event) {
    if (event.code === "Enter") {
      handleSave();
    }
  }
  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ангилал нэмэх</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-1">
            <b>Hэр</b>
          </InputGroup>
          <Form.Control
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder=" Ангилалийн нэр"
            value={text}
            onChange={handleTextChange}
            onKeyUp={handleKeyUp}
            style={
              error
                ? { borderColor: "red", borderWidth: "2px" }
                : { borderColor: "gray" }
            }
          />
          <AdminError error={error} />
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-between">
          <Button variant="btn btn-secondary" onClick={onClose}>
            Хаах
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { AdminError } from "./adminError";
import axios from "axios";

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
      axios
        .post("http://localhost:4000", {
          name: text,
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            setText("");
            setError("");
            onClose();
            onSave();
          }
        });
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
        <Modal.Footer>
          <Button variant="primary" onClick={handleSave}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import "./categoriesEdit.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useRef, useState } from "react";

function CategoriesEdit({ show, onClose }) {
  const [name, setName] = useState("");

  // react DOM buyu useref

  const inputEl = useRef();

  useEffect(() => {
    if (show) {
      inputEl.current.focus();
    }
  }, [show]);

  return (
    <>
      <Modal show={show} onHide={onClose}>
        <Modal.Header>
          <Modal.Title>Шинэ ангилал нэмэх </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            ref={inputEl}
            type="email"
            placeholder="Ангилал нэр..."
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={onClose}>
            Буцах
          </Button>
          <Button variant="success">Хадгалах</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoriesEdit;

import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";

export function AdminNew({ show, onClose, onSave }) {
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
          />
        </Modal.Body>
        <Modal.Footer className=" d-flex justify-content-between">
          <Button variant="btn btn-secondary" onClick={onClose}>
            Хаах
          </Button>
          <Button variant="primary" onClick={onSave}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { List } from "./list.js";

function Main() {
  function deleteThis() {
    alert("Delete");
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="col-6 mx-auto mt-5 d-flex justify-content-between">
        <h2>Ангилал</h2>
        <Button variant="outline-primary" onClick={handleShow}>
          Шинэ
        </Button>
      </div>
      <List />

      <Modal show={show} onHide={handleClose}>
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
          <Button
            variant="white"
            onClick={handleClose}
            className="btn btn-outline-danger  onClick={deleteThis}"
          >
            Устгах
          </Button>
          {/* <AwesomeButton type="danger">Устгах</AwesomeButton> */}

          <Button variant="primary" onClick={handleClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Main;

import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Main() {
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
      <Card className="col-6 mt-5 mx-auto bg-light">
        <Card.Body className="d-flex justify-content-between ">
          <b className="mb-0 d-flex align-items-center">Улс төр</b>{" "}
          <Button variant="light" className="">
            Засах{" "}
          </Button>
        </Card.Body>
      </Card>
      <Card className="col-6 mt-5 mx-auto bg-light">
        <Card.Body className="d-flex justify-content-between ">
          <b className="mb-0 d-flex align-items-center">Нийгэм </b>{" "}
          <Button variant="light" className="">
            Засах{" "}
          </Button>
        </Card.Body>
      </Card>
      <Card className="col-6 mt-5 mx-auto bg-light">
        <Card.Body className="d-flex justify-content-between ">
          <b className="mb-0 d-flex align-items-center">Спорт</b>{" "}
          <Button variant="light" className="">
            Засах{" "}
          </Button>
        </Card.Body>
      </Card>
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
            className="btn btn-outline-danger "
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

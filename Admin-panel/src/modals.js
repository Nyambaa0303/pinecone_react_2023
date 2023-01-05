import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import React from "react";
import Button from "react-bootstrap/Button";

// function Modals() {
//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Ангилал нэмэх</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <InputGroup className="mb-1">
//           <b>Hэр</b>
//         </InputGroup>
//         <Form.Control
//           aria-label="Default"
//           aria-describedby="inputGroup-sizing-default"
//           placeholder=" Ангилалийн нэр"
//         />
//       </Modal.Body>
//       <Modal.Footer className=" d-flex justify-content-between">
//         <Button
//           variant="white"
//           onClick={handleClose}
//           className="btn btn-outline-danger  onClick={deleteThis}"
//         >
//           Устгах
//         </Button>
//         {/* <AwesomeButton type="danger">Устгах</AwesomeButton> */}

//         <Button variant="primary">Хадгалах</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }
// export default Modals;

export function Modals({ show, onClose }) {
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
          <Button
            variant="white"
            onClick={onClose}
            className="btn btn-outline-danger"
          >
            Устгах
          </Button>
          <Button variant="primary" onClick={onClose}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

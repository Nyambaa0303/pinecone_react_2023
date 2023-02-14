import "./categoriesEdit.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useCategories from "../../useHooks/useCategories";

function CategoriesEdit({ show, onClose, editingId }) {
  const [name, setName] = useState("");
  const { loadCategories } = useCategories();

  useEffect(() => {
    if (editingId) {
      axios.get(`http://localhost:4000/categories/${editingId}`).then((res) => {
        const { data, status } = res;
        if (status === 200) {
          setName(data.name);
        } else {
          alert(`aldaa garlaa: ${status}`);
        }
      });
    }
  }, [editingId]);

  function handleSave() {
    if (editingId === "new") {
      axios
        .post("http://localhost:4000/categories", {
          name: name,
        })
        .then((res) => {
          const { status } = res;
          if (status === 201) {
            onClose();
            setName("");
            loadCategories();
          }
        });
    } else {
      axios
        .put(`http://localhost:4000/categories/${editingId}`, {
          name: name,
        })
        .then((res) => {
          const { status } = res;
          if (status === 200) {
            onClose();
            loadCategories();
            setName("");
          }
        });
    }
  }

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
            value={name}
            type="text"
            placeholder="Ангилал нэр..."
          />
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="secondary" onClick={onClose}>
            Буцах
          </Button>
          <Button variant="success" onClick={handleSave}>
            Хадгалах
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CategoriesEdit;

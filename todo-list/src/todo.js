import { useState } from "react";
import "./todo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";

export function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function addTodo() {
    if (text === "") {
      setError("Utgaa bichne uu?");
    } else {
      const newTodos = [...todos, text];
      setTodos(newTodos);
      setText("");
      setError("");
    }
  }

  function handleDelete(position) {
    if (window.confirm("Устгах уу?")) {
      const newTodos = [...todos];
      newTodos.splice(position, 1); // delete item from array using index
      setTodos(newTodos);
    }
  }

  return (
    <div className="card1">
      <h1>Todo List App</h1>

      <InputGroup className="">
        <Form.Control
          className="bg-light"
          placeholder="Add new task"
          value={text}
          style={{ borderColor: error ? "red" : "warning" }}
          onChange={handleTextChange}
        />
        <Button onClick={addTodo}>Button</Button>

        {error && <div style={{ color: "red" }}>{error}</div>}
      </InputGroup>

      <div className="">
        <h1>jagsaalt</h1>
        {todos.map((todo, index) => {
          return (
            <div
              className="d-flex justify-content-between bg-light border rounded-3 border-secondary"
              key={index}
              style={{ textDecoration: "line-through" }}
            >
              {todo}
              <div>
                <Button className="btn toggle bg-light text-secondary border-0">
                  <BsPenFill />
                </Button>
                <Button className="btn toggle bg-light text-success border-0">
                  <BsCheckSquareFill />
                </Button>
                <Button
                  className="btn toggle bg-light text-danger border-0"
                  onClick={() => handleDelete(index)}
                >
                  <BsFillTrashFill />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

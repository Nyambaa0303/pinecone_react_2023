import { useState } from "react";
import "./todo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";
import Time from "./time";

// undsen todo function
export function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  //
  function handleTextChange(event) {
    setText(event.target.value);
  }

  // list nemeh function
  function addTodo() {
    if (text === "") {
      setError("Task empy !!!");
    } else {
      const newTodos = [...todos, text];
      setTodos(newTodos);
      setText("");
      setError("");
    }
  }

  // list ustgsh function
  function handleDelete(position) {
    if (window.confirm("Устгах уу?")) {
      const newTodos = [...todos];
      newTodos.splice(position, 1); // delete item from array using index
      setTodos(newTodos);
    }
  }

  return (
    <div className="card1 pt-5 border rounded-4 border-secondary mt-5 p-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h1>Todo List App</h1>
      <Time />

      <InputGroup className="">
        <Form.Control
          className="bg-light rounded-3 mt-5 text-secondary shadow p-3  bg-body-tertiary "
          placeholder="Add new task"
          value={text}
          style={
            error
              ? { borderColor: "red", borderWidth: "2px" }
              : { borderColor: "gray" }
          }
          onChange={handleTextChange}
        />
        <Button
          className="mt-5 rounded-3 shadow p-3 bg-body-tertiary rounded mx-1"
          variant="outline-secondary"
          onClick={addTodo}
        >
          Add++
        </Button>
      </InputGroup>
      <div>
        {error && (
          <div className="" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </div>

      <div className="">
        <h1 className="mt-3 border-bottom border-4 pb-3">Task List</h1>
        {todos.map((todo, index) => {
          return (
            <div
              className="d-flex justify-content-between bg-light border border-secondary text-secondary rounded-3 border-secondary mt-5 align-items-center p-4 shadow p-3 mb-5 bg-body-tertiary rounded"
              key={index}
              // style={{ textDecoration: "line-through" }}
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

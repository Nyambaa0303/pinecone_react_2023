import { useState } from "react";
import "./todo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import Time from "./time";
import React from "react";
import { v4 as uuidv4 } from "uuid";

// undsen todo function
export function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [editing, setEditing] = useState(); // index hadaglan

  //
  function handleTextChange(event) {
    setText(event.target.value);
  }

  // list nemeh function
  function addTodo() {
    if (text === "") {
      setError("Task empy !!!");
    } else {
      if (editing === undefined) {
        const newTodo = {
          text: text,
          done: false,
          id: uuidv4(),
        };
        const newTodos = [newTodo, ...todos];
        setTodos(newTodos);
      } else {
        const newTodos = [...todos];
        newTodos[editing].text = text;
        setTodos(newTodos);
        setEditing(undefined);
      }

      setText("");
      setError("");
    }
  }

  // edit hiij baigaa function

  function editInput(index) {
    setEditing(index);
    setText(todos[index].text);
  }

  // check hiij baigaa function

  function handleDoneChange(id) {
    const newTodos = [...todos];
    let index;
    for (let i = 0; i < todos.length; i++) {
      //ene uildeliig ingej hiij bolno const index = newTodos.findIndex((todo) => todo.id === id)
      if (id === todos[i].id) {
        index = i;
        break;
      }
    }
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
    if (newTodos[index].done === true) {
      setCount(count + 1);
    }
  }

  // list ustgsh function
  function handleDelete(position) {
    if (window.confirm("Are you delete ?")) {
      const newTodos = [...todos];
      newTodos.splice(position, 1); // delete item from array using index
      setTodos(newTodos);
    }
  }

  return (
    <div className="card1 pt-5 border rounded-4 border-secondary mt-5 p-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h1>Todo List App</h1>
      <Time />
      <p className="text-secondary">Completed Task: {count}</p>
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
            <MdError style={{ fontSize: "20px" }} className="mx-2" />
            Error: {error}
          </div>
        )}
      </div>

      <div className="">
        <h1 className="mt-3 border-bottom border-4 pb-3 ">Task List</h1>
        {todos.map((todo, index) => {
          return (
            <div
              className="d-flex justify-content-between bg-light border border-secondary text-secondary rounded-3 border-secondary mt-5 align-items-center p-4 shadow p-3 mb-5 bg-body-tertiary rounded"
              key={todo.id}
              style={
                todo.done
                  ? {
                      textDecoration: "line-through",
                      textDecorationColor: "red",
                    }
                  : { textDecoration: "none" }
              }
            >
              {todo.text}

              <div>
                <Button
                  className="btn toggle( bg-light text-secondary border-0"
                  onClick={() => editInput(index)}
                >
                  <BsPenFill />
                </Button>
                <Button
                  className="btn toggle bg-light text-success border-0"
                  onClick={() => handleDoneChange(todo.id)}
                >
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

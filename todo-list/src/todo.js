import { useState } from "react";
import "./todo.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function addTodo() {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    setText("");
  }

  return (
    <div className="card">
      <h1>Todo List App</h1>

      <InputGroup>
        <Form.Control
          placeholder="Add new task"
          onChange={handleTextChange}
          value={text}
        />
        <Button onClick={addTodo}>Button</Button>
      </InputGroup>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

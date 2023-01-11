import Time from "./time";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { TodosError } from "./todoError";

export function TodoNew({ onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSave() {
    if (text === "") {
      setError("Task empy !!!");
    } else {
      onSave(text);
      setText("");
      setError("");
    }
  }

  // Enter darahad todo list nemj baigaa function
  function handleKeyUp(event) {
    if (event.code === "Enter") {
      handleSave();
    }
  }

  return (
    <div>
      <h1>Todo List App</h1>
      <Time />
      <InputGroup className="">
        <Form.Control
          className="bg-light rounded-3 mt-5 text-secondary shadow p-3  bg-body-tertiary "
          placeholder="Add new task"
          value={text}
          onKeyUp={handleKeyUp}
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
          onClick={handleSave}
        >
          +Add
        </Button>
      </InputGroup>
      <TodosError error={error} />
    </div>
  );
}

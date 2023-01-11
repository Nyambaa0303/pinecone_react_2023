import Time from "./time";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function TodoNew({
  text,
  count,
  addTodo,
  handleKeyUp,
  handleTextChange,
  error,
}) {
  return (
    <div>
      <h1>Todo List App</h1>
      <Time />
      <p className="text-secondary">
        <b>Completed Task: {count}</b>
      </p>
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
          onClick={addTodo}
          onChange={handleTextChange}
        >
          +Add
        </Button>
      </InputGroup>
    </div>
  );
}

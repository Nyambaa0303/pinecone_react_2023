import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaCheckSquare } from "react-icons/fa";
import { BsBackspace } from "react-icons/bs";
import { TodosError } from "./todoError";

export function TodoEditing({
  index,
  cancelEditing,
  editingTexts,
  updateEditingText,
  todo,
  handleEditingText,
  error,
}) {
  function handleKeyUp(event) {
    if (event.code === "Enter") {
      updateEditingText(index, todo.id);
    }
  }
  return (
    <div className="d-flex w-100 justify-content-between">
      <InputGroup className=" w-75 d-flex flex-column">
        <Form.Control
          className="bg-light rounded-3 text-secondary w-100"
          value={editingTexts[todo.id]}
          onChange={(event) => handleEditingText(todo.id, event)}
          onKeyUp={handleKeyUp}
          style={
            error
              ? { borderColor: "red", borderWidth: "2px" }
              : { borderColor: "gray" }
          }
        />
        <TodosError error={error} />
      </InputGroup>
      <div className="d-flex gap">
        <button
          onClick={() => cancelEditing(todo.id)}
          className="border-0 bg-light"
        >
          <BsBackspace className="zasah" />
        </button>
        <button
          onClick={() => updateEditingText(index, todo.id)}
          className="border-0 bg-light"
        >
          <FaCheckSquare className="ilgeeh" />
        </button>
      </div>
    </div>
  );
}

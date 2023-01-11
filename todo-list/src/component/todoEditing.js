import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaCheckSquare } from "react-icons/fa";
import { BsBackspace } from "react-icons/bs";

export function TodoEditing(
  index,
  cancelEditing,
  editingTexts,
  updateEditingText,
  todo,
  handleEditingText
) {
  return (
    <div className="d-flex w-100 justify-content-between">
      <InputGroup className=" w-75 ">
        <Form.Control
          className="bg-light rounded-3 text-secondary"
          value={editingTexts[todo.id]}
          onChange={(event) => handleEditingText(todo.id, event)}
        />
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

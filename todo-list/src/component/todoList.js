import Button from "react-bootstrap/Button";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";

export function TodoList({
  index,
  todo,
  handleDelete,
  handleDoneChange,
  editTodoInline,
}) {
  return (
    <>
      {todo.text}
      {!todo.done && (
        <div>
          {/* zasah arga hoyriin button */}

          {/* <Button
              className="btn toggle( bg-light text-secondary border-0"
              onClick={() => editInput(index)}
            >
              <BsPenFill />
            </Button> */}

          {/* zasah arga negiiin button */}
        </div>
      )}
      <div>
        <Button
          className="btn toggle( bg-light text-secondary border-0"
          onClick={() => editTodoInline(todo.id, index)}
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
    </>
  );
}

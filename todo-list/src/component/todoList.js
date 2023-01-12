import Button from "react-bootstrap/Button";
import { BsCheckSquareFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPenFill } from "react-icons/bs";
import { useState } from "react";

export function TodoList({ index, todo, handleDoneChange, editTodoInline }) {
  const [todos, setTodos] = useState([]);
  const [editingTexts, setEditingTexts] = useState({});
  // list ustgsh function
  function handleDelete(position) {
    if (window.confirm("Are you delete ?")) {
      const newTodos = [...todos];
      newTodos.splice(position, 1); // delete item from array using index
      setTodos(newTodos);
    }
  }

  // edit hiij baigaa function 1 dahi arga

  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
    setEditingTexts(newEditingTexts);
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
  }

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

import { useState } from "react";
import "./todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoNew } from "./todoNew";
import { TodoList } from "./todoList";
import { TodoEditing } from "./todoEditing";
import { toast } from "react-toastify";

// undsen todo function
export function Todos() {
  const [todos, setTodos] = useState([]);
  const [editingTexts, setEditingTexts] = useState({});
  const [error, setError] = useState("");

  // list nemeh function
  function handleSave(text) {
    const newTodo = {
      text: text,
      done: false,
      id: uuidv4(),
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    toast.warn("🦄 Wow so easy!", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  // list ustgsh function
  function handleDelete(position) {
    if (window.confirm("Are you delete ?")) {
      const newTodos = [...todos];
      newTodos.splice(position, 1); // delete item from array using index
      setTodos(newTodos);
    }
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

  // edit hiij baigaa function 1 dahi arga

  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index]?.text;

    setEditingTexts(newEditingTexts);
  }

  //
  function handleEditingText(id, event) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = event.target.value;
    setEditingTexts(newEditingTexts);
  }

  // zasahaa bolih uyd hiigdej baigaaa  uildel
  function cancelEditing(id) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = undefined;
    setEditingTexts(newEditingTexts);
  }

  // hadgalah button darah uyd hiigdej baigaa uildel
  function updateEditingText(index, id) {
    const newTodos = [...todos];
    if (!editingTexts[id]) {
      setError("Task is empy !!!");
    } else {
      newTodos[index].text = editingTexts[id];
      setTodos(newTodos);
      cancelEditing(id);
      setError("");
    }
  }

  return (
    <div className="card1 pt-5 border rounded-4 border-secondary mt-5 p-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <TodoNew onSave={handleSave} />

      <div className="">
        <h1 className="mt-3 border-bottom border-4 pb-3">Task List</h1>
        {todos.map((todo, index) => {
          return (
            <div
              className="d-flex justify-content-between bg-light border border-secondary text-secondary rounded-3 border-secondary mt-5 align-items-center p-4 shadow p-3 mb-5 bg-body-tertiary rounded"
              key={todo.id}
              style={
                todo.done
                  ? {
                      textDecoration: "line-through",
                      textDecorationColor: "gray",
                    }
                  : { textDecoration: "none" }
              }
            >
              {editingTexts[todo.id] !== undefined ? (
                <TodoEditing
                  editingTexts={editingTexts}
                  todo={todo}
                  handleEditingText={handleEditingText}
                  cancelEditing={cancelEditing}
                  updateEditingText={updateEditingText}
                  index={index}
                  error={error}
                />
              ) : (
                <TodoList
                  editTodoInline={editTodoInline}
                  handleDoneChange={handleDoneChange}
                  handleDelete={handleDelete}
                  index={index}
                  todo={todo}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

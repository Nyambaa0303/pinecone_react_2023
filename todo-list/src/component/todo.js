import { useState } from "react";
import "./todo.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdError } from "react-icons/md";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoNew } from "./todoNew";
import { TodoList } from "./todoList";
import { TodoEditing } from "./todoEditing";

// undsen todo function
export function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const [editing, setEditing] = useState(); // index hadaglan
  const [editingTexts, setEditingTexts] = useState({});

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

  // edit hiij baigaa function 2 dahi arga

  function editInput(index) {
    setEditing(index);
    setText(todos[index].text);
  }

  // edit hiij baigaa function 1 dahi arga

  function editTodoInline(id, index) {
    const newEditingTexts = { ...editingTexts };
    newEditingTexts[id] = todos[index].text;
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
    newTodos[index].text = editingTexts[id];
    setTodos(newTodos);
    cancelEditing(id);
  }

  // Enter darahad todo list nemj baigaa function
  function handleKeyUp(event) {
    if (event.code === "Enter") {
      addTodo();
    }
  }

  return (
    <div className="card1 pt-5 border rounded-4 border-secondary mt-5 p-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <TodoNew
        count={count}
        text={text}
        handleKeyUp={handleKeyUp}
        error={error}
        handleTextChange={handleTextChange}
        addTodo={addTodo}
      />
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
              {editingTexts[todo.id] !== undefined ? (
                <TodoEditing
                  editingTexts={editingTexts}
                  todo={todo}
                  handleEditingText={handleEditingText}
                  cancelEditing={cancelEditing}
                  updateEditingText={updateEditingText}
                  index={index}
                />
              ) : (
                <TodoList
                  todo={todo}
                  editTodoInline={editTodoInline}
                  handleDoneChange={handleDoneChange}
                  handleDelete={handleDelete}
                  index={index}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

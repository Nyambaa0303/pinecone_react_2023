import { useState } from "react";
import { TodosError } from "";

export function TodosNew({ onSave }) {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSave() {
    if (text === "") {
      setError("Utgaa bichne uu?");
    } else {
      onSave(text);
      setError("");
      setText("");
    }
  }

  function handleKeyUp(event) {
    if (event.code === "Enter") {
      handleSave();
    }
  }

  return (
    <>
      <input
        value={text}
        style={{ borderColor: error ? "red" : "black" }}
        onChange={handleTextChange}
        onKeyUp={handleKeyUp}
      ></input>
      <button onClick={handleSave}>hadgalah</button>
    </>
  );
}

import { useState } from "react";
import crypto from "crypto"; // Import the crypto module
import "./extra.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]); // Initialize todos as an empty array

  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), title: newItem, completed: false },
    ]);

    setNewItem("");
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        {/* ... rest of the code */}
      </form>
    </>
  );
}
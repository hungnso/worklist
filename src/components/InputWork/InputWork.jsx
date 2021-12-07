import React, { useState } from "react";

function InputWork({ handelSubmitTodoList }) {
  const [newValue, setNewValue] = useState("");

  const onAddTask = (e) => {
    e.preventDefault();
    if (newValue) {
      setNewValue("");
      handelSubmitTodoList(newValue);
    }
  };

  return (
    <div>
      <div className="input-container">
        <form onSubmit={onAddTask}>
          <input
            className="input-control"
            type="text"
            value={newValue}
            placeholder="Enter the new to do"
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button className="btn-add">Add</button>
        </form>
      </div>
    </div>
  );
}

export default InputWork;

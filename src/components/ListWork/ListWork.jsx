import React from "react";

function ListWork({ tasks, checkLoading, handleDelete }) {
  const checkTast = tasks.filter((x) => x.status === "loading");

  return (
    <>
      <div className="title">
        There {checkTast.length > 1 ? "are" : "is"} {checkTast.length}{" "}
        {checkTast.length > 1 ? "tasks" : "task"} to complete
      </div>
      <div className="content">
        <ul className="content-list">
          {tasks.map((value, index) => (
            <li key={value.id} className="content-item">
              <div>
                <input type="checkbox" onChange={() => checkLoading(index)} />
                <span className={value.status === "loading" ? "" : "completed"}>
                  {value.content}
                </span>
              </div>
              <button
                className="btn-delete"
                type="submit"
                onClick={() => handleDelete(value.id)}
              >
                {" "}
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListWork;

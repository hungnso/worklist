import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import InputWork from "./components/InputWork/InputWork";
import ListWork from "./components/ListWork/ListWork";
const initTodoList = [{ id: 1, content: "Learn React", status: "loading" }];

function App() {
  const [tasks, setTasks] = useState(initTodoList);

  const handelSubmitTodoList = (newValue) => {
    const newTasks = [
      ...tasks,
      {
        id: tasks.length + 1,
        content: newValue,
        status: "loading",
      },
    ];
    setTasks(newTasks);
  };

  const checkLoading = (index) => {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      status: newTasks[index].status === "loading" ? "completed" : "loading",
    };
    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((x) => x.id !== id);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Header />
      <InputWork tasks={tasks} handelSubmitTodoList={handelSubmitTodoList} />
      <ListWork
        tasks={tasks}
        checkLoading={checkLoading}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;

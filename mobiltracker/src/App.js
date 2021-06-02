import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";

const App = () => {
  // let message = "Hello World";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Programação",
      completede: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completede: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks} />
      </div>
      ;
    </>
  );
};

export default App;

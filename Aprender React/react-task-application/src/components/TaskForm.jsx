import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handlesSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    settitle("");
    setdescription("");
  };

  return (
    <div className="max-w-md  mx-auto ">
      <form onSubmit={handlesSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold  text-white mb-3">Crear tu tarea</h1>
        <input className="bg-slate-300 p-3 w-full mb-2"
          type="text"
          placeholder="tarea"
          onChange={(e) => settitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Descripciom de la tarea"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1  text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;

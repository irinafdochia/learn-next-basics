"use client";

import { useEffect, useState } from "react";
import TaskItem from "../components/taskItem";


export interface Task {
  id: number;
  label: string;
  creationDate: string;
  doneStatus: boolean;
}

export default function Dashboard() {
  const [taskInputText, setTaskInputText] = useState<string>("")
  const [tasks, setTasks] = useState<Task[]>([]);
  
  useEffect(() => {
    fetch("/api/tasks").then(res => res.json()).then((data) => {
      setTasks(data)
      console.log("DATI:", data)
    })
  }, [])
  

  function submitTask() {
    //verrà rimosso con l'uso di prisma push
    let newTask: Task = {
      id: Date.now(),
      label: taskInputText,
      creationDate: Date.now().toString(),
      doneStatus: false
    }

    setTasks([...tasks, newTask])
  }

  function removeTask(taskId: number) {
    let filteredOutTasks = tasks.filter(task => task.id !== taskId)

    setTasks(filteredOutTasks)
  }

  function changeTaskStatus(event:React.ChangeEvent<HTMLInputElement>, taskId: number) {
    let newStatus = event.target.checked;
    //il map deve sempre avere un return per ciascun elemento dell'iterazione!!!
    let updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {...task, doneStatus: newStatus}
      }
      return task
    })
    setTasks(updatedTasks)
  }

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={taskInputText}
            onChange={e => setTaskInputText(e.target.value)}
            type="text"
            placeholder="Add a new task"
            className="flex-grow border px-3 py-2 rounded"
          />
          <button onClick={submitTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} removeTask={removeTask} changeTaskStatus={changeTaskStatus}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

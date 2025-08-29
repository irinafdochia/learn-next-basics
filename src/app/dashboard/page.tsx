"use client";

import { useState } from "react";
import TaskItem from "../components/taskItem";


export interface Task {
  id: String;
  label: String;
  creationDate: String;
  doneStatus: Boolean;
}

export default function Dashboard() {
  const defaultTasks = [
    {
      id: 1,
      label: "Fare la spesa",
      creationDate: "1756492630",
      doneStatus: false,
    },
    {
      id: 2,
      label: "Cucinare",
      creationDate: "1756492631",
      doneStatus: true,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task"
            className="flex-grow border px-3 py-2 rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id}/>
          ))}
          <button className="text-red-500 hover:underline">Delete</button>
        </ul>
      </div>
    </div>
  );
}

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TaskItem from "@/components/TaskItem";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = { id: Date.now(), text: newTask };
    setTasks([task, ...tasks]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const saveTask = (id, text) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text } : task))
    );
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="flex mb-4">
        <Input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
          className="mr-2"
        />
        <Button onClick={addTask}>Add Task</Button>
      </div>
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onSave={saveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
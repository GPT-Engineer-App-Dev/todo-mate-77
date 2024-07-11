import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const TaskItem = ({ task, onDelete, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.text);

  const handleSave = () => {
    onSave(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <Card className="flex items-center justify-between p-4 mb-2">
      {isEditing ? (
        <Input
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          className="mr-2"
        />
      ) : (
        <span>{task.text}</span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <Button onClick={handleSave}>Save</Button>
        ) : (
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
        )}
        <Button variant="destructive" onClick={() => onDelete(task.id)}>
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default TaskItem;
import { useState } from "react";
import {
  Task,
} from "./styled";
import TaskItemEditing from "./TaskitemEditing";
import TaskItemView from "./TaskItemView";

const TaskItem = ({ item, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...item });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editData);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are yoy suer?");
    if (confirmDelete) {
      onDelete(item.id);
    }
  };

  return (
    <Task>
      {isEditing ? (
             <TaskItemEditing 
              editData={editData}
              handleEditChange={handleEditChange}
              handleSave={handleSave}
             />
      ) : (

        <TaskItemView 
          item={item}
          handleDelete={handleDelete}
          setIsEditing={setIsEditing}
        />
      )}
    </Task>
  );
};

export default TaskItem;

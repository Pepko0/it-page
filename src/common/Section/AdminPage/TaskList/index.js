import TaskItem from "../TaskItem";

const TaskList = ({ data, onSave, onDelete }) => (
  <ul>
    {data.map((item, index) => (
      <TaskItem key={index} item={item} onSave={onSave} onDelete={onDelete} />
    ))}
  </ul>
);

export default TaskList;

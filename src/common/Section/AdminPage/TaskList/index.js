import TaskItem from "../TaskItem";

const TaskList = ({ data, onSave }) => (
  <ul>
    {data.map((item, index) => (
      <TaskItem key={index} item={item} onSave={onSave} />
    ))}
  </ul>
);

export default TaskList;

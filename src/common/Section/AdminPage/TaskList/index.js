import TaskItem from "../TaskItem";
import { Element } from "./styled";

const TaskList = ({ data, onSave, onDelete }) => (
  <Element>
    {data.map((item, index) => (
      <TaskItem key={index} item={item} onSave={onSave} onDelete={onDelete} />
    ))}
  </Element>
);

export default TaskList;

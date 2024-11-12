import Navigation from "../Navigation";
import TaskList from "./TaskList";
import { Container } from "./styled";
import Loading from "../../../features/Loading";
import ErrorGH from "../../../features/ErrorGH";
import useTaskData from "../../../features/useTaskData";

const AdminPage = () => {
  const { taskData, updateTask } = useTaskData();

  if (taskData.status === "pending") {
    return <Loading />;
  }
  if (taskData.status === "error") {
    return <ErrorGH />;
  }
  if (taskData.data.length === 0) {
    return <p>Brak danych</p>;
  }

  return (
    <>
      <Navigation />
      <Container>
        <TaskList data={taskData.data} onSave={updateTask} />
      </Container>
    </>
  );
};

export default AdminPage;

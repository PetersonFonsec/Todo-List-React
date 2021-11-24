import { useContext } from "react";
import TaskContext from "../../context/tasks";
import { ITask } from "../../shared/types/Task";
import TaskItem from "../Task/Task";

interface ListTaskProps {
  tasks: ITask[];
}

const ListTask: React.FC<ListTaskProps> = ({ tasks }) => {
  const contexTasks = useContext(TaskContext);

  if (tasks.length) {
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <TaskItem click={() => contexTasks.completeTask(task)} {...task} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <span> No tasks ... </span>;
  }
};

export default ListTask;

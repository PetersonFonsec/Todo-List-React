import { createContext } from "react";
import { ITask } from "../shared/types/Task";

interface ITaskContext {
  tasks: ITask[];
  updateTask: (newTask: ITask) => void;
  completeTask: (newTask: ITask) => void;
}

const initialValue: ITaskContext = {
  tasks: [],
  updateTask: (newTask: ITask) => {},
  completeTask: (newTask: ITask) => {},
};

const TaskContext = createContext<ITaskContext>(initialValue);

export default TaskContext;

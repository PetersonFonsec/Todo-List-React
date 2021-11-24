import { useState } from "react";
import Card from "./components/Card/Card";
import FormSearch from "./components/FormSearch/FormSearch";
import ListTask from "./components/ListTask/ListTask";
import TaskContext from "./context/tasks";
import { ITask } from "./shared/types/Task";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function thisTaskExist({ title }: ITask): boolean {
    return !!tasks.filter((task) => task.title === title).length;
  }

  function updateTask(newTask: ITask) {
    if (thisTaskExist(newTask)) return;
    setTasks((allTask) => [...allTask, newTask]);
  }

  function completeTask(newTask: ITask) {
    if (!thisTaskExist(newTask)) return;

    setTasks((allTask) => {
      const updatedTask = allTask.map((task) => {
        if (task.id === newTask.id) task.isComplet = true;
        return task;
      });

      return updatedTask;
    });
  }

  return (
    <main>
      <TaskContext.Provider value={{ tasks, updateTask, completeTask }}>
        <Card>
          <FormSearch />
          <ListTask tasks={tasks} />
        </Card>
      </TaskContext.Provider>
    </main>
  );
};

export default App;

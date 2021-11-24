import { useContext, useState } from "react";
import TaskContext from "../../context/tasks";
import { ITask } from "../../shared/types/Task";
import { Form, Input, Label } from "./style";

const FormSearch: React.FC = () => {
  const taskContext = useContext(TaskContext);
  const [search, setSearch] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();

    const newTask: ITask = {
      isComplet: false,
      title: search,
      id: `${Math.random() * 10}`,
    };

    taskContext.updateTask(newTask);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={search}
        onChange={(el) => setSearch(el.target.value)}
        name="newTask"
        id="newTask"
        placeholder="Task name"
      />
      <Label htmlFor="newTask">Notes...</Label>
    </Form>
  );
};

export default FormSearch;

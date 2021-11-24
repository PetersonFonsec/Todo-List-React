import { ITask } from "../../shared/types/Task";
import { Label, Checkbox } from "./styled";

interface ITaskItemProps extends ITask {
  click: (id: ITask["id"]) => void;
}

const TaskItem: React.FC<ITaskItemProps> = ({
  id,
  isComplet,
  title,
  click,
}) => {
  return (
    <Label onClick={() => click(id)} htmlFor={id}>
      <Checkbox
        type="checkbox"
        name="task"
        defaultChecked={isComplet}
        id={id}
      />
      {title}
    </Label>
  );
};

export default TaskItem;

import { Container } from "./styles";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";

interface TaskInfoProps {
  taskId: string;
  text: string;
}

export function TaskInfo({ taskId, text }: TaskInfoProps) {
  const [checked, setChecked] = useState(false);

  function handleTaskStatus() {
    setChecked(!checked);
  }

  return (
    <Container className={checked ? "taskDone" : ""}>
      <div className="checkboxControl">
        <label htmlFor={taskId}>
          <input
            className="formInput"
            type="checkbox"
            id={taskId}
            checked={checked}
            onChange={handleTaskStatus}
          />
          <span className="sr-only">Finalizar esta tarefa</span>
        </label>
      </div>
      <span>{text}</span>
      <button aria-label="Excluir Tarefa" type="button">
        <span className="sr-only">Excluir tarefa</span>
        <HiOutlineTrash />
      </button>
    </Container>
  );
}

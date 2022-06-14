import { Container } from "./styles";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";

interface TaskInfoProps {
  taskId: string;
  text: string;
  deleteTask: (id: string) => void;
}

export function TaskInfo({ taskId, text, deleteTask }: TaskInfoProps) {
  const [checked, setChecked] = useState(false);

  function handleTaskStatus() {
    setChecked(!checked);
  }

  function handleDeleteTask(id: string) {
    deleteTask(id);
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
      <button
        aria-label="Excluir Tarefa"
        type="button"
        onClick={() => handleDeleteTask(taskId)}
      >
        <span className="sr-only">Excluir tarefa</span>
        <HiOutlineTrash />
      </button>
    </Container>
  );
}

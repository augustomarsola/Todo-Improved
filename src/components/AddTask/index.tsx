import { ChangeEvent, FormEvent, useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ContainerForm } from "./styles";

interface AddTaskProps {
  onFormSubmit: (element: FormEvent<HTMLFormElement>, taskText: string) => void;
}

export function AddTask({ onFormSubmit }: AddTaskProps) {
  const [newTask, setNewTask] = useState("");

  function handleTaskInput(e: ChangeEvent<HTMLInputElement>) {
    setNewTask(e.target.value);
  }

  function handleSubmitTask(
    e: FormEvent<HTMLFormElement>,
    newTaskPassed: string
  ) {
    onFormSubmit(e, newTask);
    setNewTask("");
  }

  return (
    <ContainerForm onSubmit={(e) => handleSubmitTask(e, newTask)}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={handleTaskInput}
      />
      <button type="submit">
        Criar <AiOutlinePlusCircle size={"1.2rem"} />
      </button>
    </ContainerForm>
  );
}

import { FormEvent, useState } from "react";
import { AddTask } from "../AddTask";
import { AllTasksList } from "../AllTasksList";
import { Container } from "./styles";
import _ from "lodash";

interface TasksProps {
  id: string;
  taskToDo: string;
}

export function TaskControl() {
  const [task, setTask] = useState<TasksProps[]>([]);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>, taskText: string) {
    e.preventDefault();
    const newTask: TasksProps = {
      id: _.uniqueId("task_"),
      taskToDo: taskText,
    };

    setTask([...task, newTask]);
    console.log(task);
  }

  return (
    <Container>
      <AddTask onFormSubmit={handleFormSubmit} />
      <AllTasksList allTasks={task} />
    </Container>
  );
}

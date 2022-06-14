import { FormEvent, useState } from "react";
import { AddTask } from "../AddTask";
import { AllTasksList } from "../AllTasksList";
import { Container } from "./styles";
import _ from "lodash";

interface TasksProps {
  id: string;
  taskToDo: string;
  taskDone: boolean;
}

export function TaskControl() {
  const [task, setTask] = useState<TasksProps[]>([]);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>, taskText: string) {
    e.preventDefault();
    const newTask: TasksProps = {
      id: _.uniqueId("task_"),
      taskToDo: taskText,
      taskDone: false,
    };

    setTask([...task, newTask]);
  }

  function deleteTask(id: string) {
    const filteredTasks = task.filter((taskFilter) => {
      return taskFilter.id !== id;
    });

    setTask(filteredTasks);
  }

  function updateTaskDone(id: string) {
    const updatedTasksDone = task.map((taskUpdated) => {
      if (taskUpdated.id === id) {
        taskUpdated.taskDone = !taskUpdated.taskDone;
        return taskUpdated;
      }

      return taskUpdated;
    });

    setTask(updatedTasksDone);
  }

  return (
    <Container>
      <AddTask onFormSubmit={handleFormSubmit} />
      <AllTasksList
        allTasks={task}
        deleteTask={deleteTask}
        updateTaskDone={updateTaskDone}
      />
    </Container>
  );
}

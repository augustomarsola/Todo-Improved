import { Container } from "./styles";
import Clipboard from "../../assets/Clipboard.svg";
import { TaskInfo } from "../TaskInfo";

interface Tasks {
  id: string;
  taskToDo: string;
}

interface AllTasksListProps {
  allTasks: Tasks[];
}

export function AllTasksList({ allTasks }: AllTasksListProps) {
  return (
    <Container>
      <div className="tasksOverview">
        <div>
          <span className="todosCreated">Tarefas criadas</span>
          <span className="badge">{allTasks.length}</span>
        </div>
        <div>
          <span className="todosDone">Concluídas</span>
          <span className="badge">2 de 5</span>
        </div>
      </div>

      <div className="taskList">
        {allTasks.length ? (
          allTasks.map((task) => (
            <TaskInfo key={task.id} text={task.taskToDo} />
          ))
        ) : (
          <div className="taskList__empty">
            <img src={Clipboard} alt="Prancheta Vazia" aria-hidden="true" />
            <div className="taskList__emptyText">
              <p className="font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

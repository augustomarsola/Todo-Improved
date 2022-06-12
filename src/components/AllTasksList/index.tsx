import { Container } from "./styles";
import Clipboard from "../../assets/Clipboard.svg";

export function AllTasksList() {
  return (
    <Container>
      <div className="tasksOverview">
        <div>
          <span className="todosCreated">Tarefas criadas</span>
          <span className="badge">5</span>
        </div>
        <div>
          <span className="todosDone">Concluídas</span>
          <span className="badge">2 de 5</span>
        </div>
      </div>

      <div className="taskList">
        <div className="taskList__empty">
          <img src={Clipboard} alt="Prancheta Vazia" aria-hidden="true" />
          <div className="taskList__emptyText">
            <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

import { Container } from "./styles";
import { HiOutlineTrash } from "react-icons/hi";

export function TaskInfo() {
  return (
    <Container>
      <div className="checkboxControl">
        <input type="checkbox" id="checkbox-" />
        <label htmlFor="checkbox-">
          <span className="sr-only">Finalizar esta tarefa</span>
        </label>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
        mollitia labore vero deserunt cum iste consectetur iure.
      </span>
      <button aria-label="Excluir Tarefa">
        <span className="sr-only">Excluir tarefa</span>
        <HiOutlineTrash />
      </button>
    </Container>
  );
}

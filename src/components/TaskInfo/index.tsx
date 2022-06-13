import { Container } from "./styles";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";

export function TaskInfo() {
  const [checked, setChecked] = useState(false);

  function handleTaskStatus() {
    setChecked(!checked);
  }

  return (
    <Container className={checked ? "taskDone" : ""}>
      <div className="checkboxControl">
        <label /*htmlFor="checkbox-"*/>
          <input
            className="formInput"
            type="checkbox"
            id="checkbox-"
            checked={checked}
            onChange={handleTaskStatus}
          />
          <span className="sr-only">Finalizar esta tarefa</span>
        </label>
      </div>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, maxime
        mollitia labore vero deserunt cum iste consectetur iure.
      </span>
      <button aria-label="Excluir Tarefa" type="button">
        <span className="sr-only">Excluir tarefa</span>
        <HiOutlineTrash />
      </button>
    </Container>
  );
}

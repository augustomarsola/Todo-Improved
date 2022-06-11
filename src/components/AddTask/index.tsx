import { AiOutlinePlusCircle } from "react-icons/ai";
import { ContainerForm } from "./styles";

export function AddTask() {
  return (
    <ContainerForm>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar <AiOutlinePlusCircle size={"1.2rem"} />
      </button>
    </ContainerForm>
  );
}

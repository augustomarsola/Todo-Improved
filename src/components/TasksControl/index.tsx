import { AddTask } from "../AddTask";
import { AllTasksList } from "../AllTasksList";
import { Container } from "./styles";

export function TaskControl() {
  return (
    <Container>
      <AddTask />
      <AllTasksList />
    </Container>
  );
}

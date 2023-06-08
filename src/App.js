import Container from "react-bootstrap/Container";
import { Banner } from "./components/Banner";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <Container>
      <Banner />
      <TodoForm />
      <TodoList />
    </Container>
  );
};

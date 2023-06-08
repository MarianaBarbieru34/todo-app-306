import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import { TodoCard } from "./TodoCard";

export const TodoList = () => {
  return (
    <Stack>
      <h2 className="text-center">To Do List</h2>
      <hr />
      <div className="text-center">
        <Button variant="danger">Clear List</Button>
      </div>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </Stack>
  );
};

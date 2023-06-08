import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

import { TodoCard } from "./TodoCard";

export const TodoList = ({ handleClose, handleShow }) => {
  return (
    <Stack className="p-4 border my-3 rounded">
      <h2 className="text-center">To Do List</h2>
      <hr />
      <div className="text-center">
        <Button variant="danger">Clear List</Button>
      </div>
      <TodoCard handleClose={handleClose} handleShow={handleShow} />
      <TodoCard handleClose={handleClose} handleShow={handleShow} />
      <TodoCard handleClose={handleClose} handleShow={handleShow} />
    </Stack>
  );
};

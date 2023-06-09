import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import { TodoCard } from "./TodoCard";

export const TodoList = ({
  clearTodoItems,
  handleShow,
  todoItems,
  selectItem,
}) => {
  return (
    <Stack className="p-4 border my-3 rounded">
      <h2 className="text-center">To Do List</h2>
      <hr />
      {todoItems.length === 0 ? (
        <Alert variant="warning" className="text-center">
          You have no todo tasks.
        </Alert>
      ) : (
        <>
          <div className="text-center">
            <Button variant="danger" onClick={clearTodoItems}>
              Clear List
            </Button>
          </div>
          {todoItems.map((todoItem) => {
            return (
              <TodoCard
                handleShow={handleShow}
                todoItem={todoItem}
                key={todoItem.id}
                selectItem={selectItem}
              />
            );
          })}
        </>
      )}
    </Stack>
  );
};

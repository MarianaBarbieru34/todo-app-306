import { useEffect, useState } from "react";
import uuid4 from "uuid4";
import { format } from "date-fns";
import Container from "react-bootstrap/Container";

import { Banner } from "./components/Banner";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";
import { getFromLocalStorage } from "./utils/getFromLocalStorage";

export const App = () => {
  const [todoItems, setTodoItems] = useState();
  const [showModal, setShowModal] = useState(false);
  const [itemSelected, setItemSelected] = useState();

  useEffect(() => {
    const itemsFromLocalStorage = getFromLocalStorage("todoItems");

    setTodoItems(itemsFromLocalStorage);
  }, []);

  const handleClose = () => {
    setItemSelected();
    setShowModal(false);
  };

  const handleShow = () => setShowModal(true);

  const addTodoItem = (title) => {
    const itemToAdd = {
      id: uuid4(),
      title,
      status: "INCOMPLETE",
      createdAt: format(new Date(), "EEE do MMMM, yyyy 'at' HH:mm"),
    };

    const itemsFromLocalStorage = getFromLocalStorage("todoItems");

    const newItems = [itemToAdd, ...itemsFromLocalStorage];

    localStorage.setItem("todoItems", JSON.stringify(newItems));

    setTodoItems(newItems);
  };

  const clearTodoItems = () => {
    localStorage.removeItem("todoItems");

    setTodoItems([]);
  };

  const selectItem = (item) => {
    setItemSelected(item);
  };

  return (
    <Container>
      {itemSelected && (
        <EditModal
          handleClose={handleClose}
          showModal={showModal}
          itemSelected={itemSelected}
        />
      )}
      <Banner />
      <TodoForm addTodoItem={addTodoItem} />
      {todoItems && (
        <TodoList
          handleClose={handleClose}
          handleShow={handleShow}
          todoItems={todoItems}
          clearTodoItems={clearTodoItems}
          selectItem={selectItem}
        />
      )}
    </Container>
  );
};

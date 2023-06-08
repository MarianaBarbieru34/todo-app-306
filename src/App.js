import { useState } from "react";
import Container from "react-bootstrap/Container";

import { Banner } from "./components/Banner";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { EditModal } from "./components/EditModal";

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  return (
    <Container>
      <EditModal handleClose={handleClose} showModal={showModal} />
      <Banner />
      <TodoForm />
      <TodoList handleClose={handleClose} handleShow={handleShow} />
    </Container>
  );
};

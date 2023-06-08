import { useState } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Banner } from "./components/Banner";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  const handleShow = () => setShowModal(true);

  return (
    <Container>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter title"
              value="Task to edit"
            />
            <Form.Text className="text-danger">
              Please enter a valid title.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Complete"
              checked
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Banner />
      <TodoForm />
      <TodoList handleClose={handleClose} handleShow={handleShow} />
    </Container>
  );
};

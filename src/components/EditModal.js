import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export const EditModal = ({ handleClose, showModal, itemSelected }) => {
  const [title, setTitle] = useState(itemSelected.title);
  const [error, setError] = useState("");

  const handleOnChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleSaveClick = () => {
    if (!title) {
      setError("Please enter a valid title.");
    } else {
      // edit item with new title and status
      handleClose();
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit To Do</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-4">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={handleOnChangeTitle}
          />
          {error && <Form.Text className="text-danger">{error}</Form.Text>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Complete"
            checked={itemSelected.status === "COMPLETE"}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveClick}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

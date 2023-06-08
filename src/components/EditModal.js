import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const EditModal = ({ handleClose, showModal }) => {
  return (
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
  );
};

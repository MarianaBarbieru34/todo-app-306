import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const TodoForm = () => {
  return (
    <Form className="p-4 border my-3 rounded">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter title" />
        <Form.Text className="text-danger">
          Please enter a valid title.
        </Form.Text>
      </Form.Group>
      <div className="text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

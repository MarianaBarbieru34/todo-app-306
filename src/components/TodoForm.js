import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const TodoForm = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (event) => {
    setTitle(event.currentTarget.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (!title) {
      setError("Please enter a valid title.");
    } else {
      setError("");
      setTitle("");
      addTodoItem(title);
    }
  };

  return (
    <Form className="p-4 border my-3 rounded" onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={handleOnChange}
        />
        {error && <Form.Text className="text-danger">{error}</Form.Text>}
      </Form.Group>
      <div className="text-center">
        <Button variant="success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

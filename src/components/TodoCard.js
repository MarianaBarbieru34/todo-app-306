import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

export const TodoCard = ({ handleShow, todoItem, selectItem }) => {
  const handleEditIconClick = () => {
    selectItem(todoItem);
    handleShow();
  };

  return (
    <Card className="my-3">
      <Card.Header>{todoItem.title.toUpperCase()}</Card.Header>
      <Card.Body>
        <Stack gap={3}>
          <Stack direction="horizontal" className="justify-content-between">
            <div>Created</div>
            <div>{todoItem.createdAt}</div>
          </Stack>
          <Stack direction="horizontal" className="justify-content-between">
            <div>Status</div>
            <div className="fs-4 px-2">
              {todoItem.status === "INCOMPLETE" ? (
                <i className="fa-solid fa-xmark text-danger"></i>
              ) : (
                <i class="fa-solid fa-check text-success"></i>
              )}
            </div>
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" className="justify-content-center">
          <Button
            variant="light"
            className="mx-3"
            onClick={handleEditIconClick}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </Button>
          <Button variant="light" className="mx-3">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

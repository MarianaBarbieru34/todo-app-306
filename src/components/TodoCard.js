import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";

export const TodoCard = () => {
  return (
    <Card className="my-3">
      <Card.Header>Card title</Card.Header>
      <Card.Body>
        <Stack gap={3}>
          <Stack direction="horizontal" className="justify-content-between">
            <div>Created</div>
            <div>12th June, 2023</div>
          </Stack>
          <Stack direction="horizontal" className="justify-content-between">
            <div>Status</div>
            <div className="text-danger fs-4 px-2">
              <i class="fa-solid fa-xmark"></i>
            </div>
          </Stack>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <Stack direction="horizontal" className="justify-content-center">
          <Button variant="light" className="mx-3">
            <i class="fa-regular fa-pen-to-square"></i>
          </Button>
          <Button variant="light" className="mx-3">
            <i class="fa-solid fa-trash"></i>
          </Button>
        </Stack>
      </Card.Footer>
    </Card>
  );
};

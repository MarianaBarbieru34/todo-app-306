import Stack from "react-bootstrap/Stack";

export const Banner = () => {
  return (
    <Stack className="text-center p-4 border my-3 rounded" gap={4}>
      <h1>To Do Manger</h1>
      <h2 className="fs-5 text-muted">A simple to do application planner.</h2>
    </Stack>
  );
};

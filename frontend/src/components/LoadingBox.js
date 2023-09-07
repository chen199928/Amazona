import Spinner from "react-bootstrap/Spinner";

// Spinners can be used to show the loading state in our projects.
export default function LoadingBox() {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

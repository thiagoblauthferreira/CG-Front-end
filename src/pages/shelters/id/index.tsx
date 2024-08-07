import { useParams } from "react-router-dom";

function CoordinatorsScreen() {
  const { id } = useParams();

  return <div className="py-8">{id}</div>;
}

export default CoordinatorsScreen;

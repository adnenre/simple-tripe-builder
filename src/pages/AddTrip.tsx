import TButton from "../components/Button";
import { useNavigate } from "react-router-dom";
import TContainer from "../components/Container";

import TripList from "../components/TripList";
import { useTitle } from "../hooks/useTitle";

const AddTripe = () => {
  const navigate = useNavigate();

  // NAVIGATE TO SAVE TRIPE
  const handleAddTripe = () => {
    navigate("/saveTripe");
  };
  useTitle("Add tripe");

  return (
    <TContainer className="p-10">
      <TButton onClick={handleAddTripe} label="Add Tripe" />
      <TripList />
    </TContainer>
  );
};

export default AddTripe;

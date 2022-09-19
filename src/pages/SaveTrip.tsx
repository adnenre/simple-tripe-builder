import { useState } from "react";
import TButton from "../components/Button";
import TInput from "../components/Input";
import { useNavigate } from "react-router-dom";
import TContainer from "../components/Container";
import { useTitle } from "../hooks/useTitle";
import { useAppState } from "../state/AppStateContext";
import { addTrip } from "../state/actions";
import { ITrip } from "../components/Types";

const SaveTripe = () => {
  const intialState = {
    id: "",
    name: "",
    destination: "",
    start_date: "",
    end_date: "",
    trip_image: "",
  };
  const [tripData, setTripData] = useState<ITrip>(intialState);
  const { dispatch } = useAppState();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setTripData({ ...tripData, [name]: value });
  };
  const handleUpladImage = (file: any) => {
    setTripData({ ...tripData, trip_image: file });
  };

  const handleSaveTripe = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(addTrip(tripData));
    setTripData(intialState);

    navigate("/");
  };

  useTitle("Save Trip");
  return (
    <TContainer className="p-10 ">
      <form onSubmit={handleSaveTripe}>
        <div className="pb-10">
          <TButton
            label="Save Tripe"
            //onClick={handleSaveTripe}
            type="submit"
            btnType="secondary"
          />
          <TButton
            label="Cancel Tripe"
            onClick={handleCancel}
            btnType="danger"
          />
        </div>

        <TContainer>
          <TInput
            label="Tripe Name"
            name="name"
            onChange={handleChange}
            value={tripData.name}
            required
          />
          <TInput
            label="Tripe Distination"
            name="destination"
            onChange={handleChange}
            value={tripData.destination}
            required
          />
          <TInput
            label="Tripe Start"
            name="start_date"
            type="date"
            value={tripData.start_date}
            onChange={handleChange}
            required
          />
          <TInput
            label="Tripe End"
            name="end_date"
            type="date"
            required
            value={tripData.end_date}
            onChange={handleChange}
          />
          <TInput
            label="Tripe Image"
            name="tripe_image"
            type="file"
            required
            value={tripData.trip_image}
            onUpload={handleUpladImage}
          />
        </TContainer>
      </form>
    </TContainer>
  );
};

export default SaveTripe;

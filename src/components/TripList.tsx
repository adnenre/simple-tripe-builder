import TContainer from "./Container";
import TripItem from "./TripItem";
import { useAppState } from "../state/AppStateContext";
import { deleteTrip } from "../state/actions";

const TripList = () => {
  const { trips, dispatch } = useAppState();

  const handleSelectAction = (tripId: string) => {
    dispatch(deleteTrip(tripId));
  };
  if (trips) {
    return (
      <>
        {trips.map((trip) => (
          <TripItem
            key={trip.id}
            trip={trip}
            handleSelectAction={handleSelectAction}
          />
        ))}
      </>
    );
  }

  return (
    <TContainer className="justify-center ">no TripList to show</TContainer>
  );
};

export default TripList;

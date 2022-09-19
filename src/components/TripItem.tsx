import { ITrip } from "./Types";
import TSelect from "./Select";

interface ITripProps {
  trip: ITrip;
  handleSelectAction: (id: string) => void;
}
const TripItem = ({ trip, handleSelectAction }: ITripProps) => {
  const { id, name, destination, start_date, end_date, trip_image } = trip;
  return (
    <div className="grid grid-rows-1 gap-5">
      <div className="grid grid-cols-12 gap-5">
        <img className="col-span-2" src={trip_image} alt={name} />
        <div className="col-span-5 flex flex-col">
          <p>{destination}</p>
          <p>Start : {start_date}</p>
          <p>End : {end_date}</p>
        </div>
        <p className="col-span-3">{name}</p>
        <div className="col-span-2">
          <TSelect onSelectAction={handleSelectAction} currrentTripId={id} />
        </div>
      </div>
    </div>
  );
};

export default TripItem;

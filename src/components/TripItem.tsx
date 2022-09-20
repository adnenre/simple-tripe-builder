import { ITrip } from "./Types";
import TSelect from "./Select";

interface ITripProps {
  trip: ITrip;
  handleSelectAction: (id: string) => void;
}
const TripItem = ({ trip, handleSelectAction }: ITripProps) => {
  const { id, name, destination, start_date, end_date, trip_image } = trip;
  return (
    <div className="flex gap-5">
      <div className="flex flex-col items-center    md:w-full  bg-white rounded-lg border shadow-md md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full  rounded h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={trip_image}
          alt={name}
        />
        <div className="flex flex-col  p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            {destination}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Start : {start_date}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            End : {end_date}
          </p>
        </div>
        <p className="flex grow  md:p-4 md:px-10 md:self-start justify-end whitespace-nowrap text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </p>
        <div className=" p-4  md:self-center ">
          <TSelect onSelectAction={handleSelectAction} currrentTripId={id} />
        </div>
      </div>
    </div>
  );
};

export default TripItem;

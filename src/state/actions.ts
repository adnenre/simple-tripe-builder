import { ITrip } from "../components/Types";
/**
 * ACTION TYPES
 */
export type Action =
  | {
      type: "ADD_TRIP";
      payload: { trip: ITrip };
    }
  | {
      type: "DELETE_TRIP";
      payload: { tripId: string };
    };

/**
 * ACTION CREATOR
 */

export const addTrip = (trip: ITrip): Action => ({
  type: "ADD_TRIP",
  payload: { trip },
});

export const deleteTrip = (tripId: string): Action => ({
  type: "DELETE_TRIP",
  payload: { tripId },
});

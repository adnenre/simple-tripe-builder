import { uniqueId } from "./../utils";
import { ITrip } from "./../components/Types";
import { Action } from "./actions";

export interface AppState {
  trips: ITrip[];
}

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_TRIP": {
      const { trip } = action.payload;
      draft.trips.push({
        ...trip,
        id: uniqueId(),
      });
      break;
    }
    case "DELETE_TRIP": {
      const { tripId } = action.payload;
      draft.trips = draft.trips.filter(({ id }) => id !== tripId);
      break;
    }

    default: {
      break;
    }
  }
};

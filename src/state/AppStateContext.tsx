import { ITrip } from "../components/Types";
import { createContext, useContext, useEffect, Dispatch } from "react";
import { AppState, appStateReducer } from "./AppStateReducer";
import { withInitialState } from "../HOC/withInitialState";
import { useImmerReducer } from "use-immer";

import { Action } from "./actions";
import TripService from "../services/TripService";

type AppStateProviderProps = {
  children: React.ReactNode;
  initialState: AppState;
};
type AppStateContextProps = {
  trips: ITrip[];
  getTripsLength: () => number;
  dispatch: Dispatch<Action>;
};
const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

const AppStateProvider = withInitialState<AppStateProviderProps>(
  ({ children, initialState }) => {
    const { Provider } = AppStateContext;
    const [state, dispatch] = useImmerReducer(appStateReducer, initialState);
    // Data trips
    const { trips } = state;

    // Provider
    // useEffect(() => {
    //   TripService.save({ trips });
    // }, [trips.length]);
    const getTripsLength = () => trips.length;
    return (
      <Provider value={{ trips, getTripsLength, dispatch }}>
        {children}
      </Provider>
    );
  }
);

export default AppStateProvider;

// Custom hooks useAppState

export const useAppState = () => {
  return useContext(AppStateContext);
};

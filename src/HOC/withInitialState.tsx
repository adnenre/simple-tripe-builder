/* eslint-disable react/display-name */
import { useState, useEffect, ComponentType } from "react";
import TripService from "../services/TripService";
import { AppState } from "../state/AppStateReducer";
import Loading from "../components/Loading";
type InjectedProps = {
  initialState: AppState;
};
type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>;

export function withInitialState<TProps>(
  WrappedComponent: ComponentType<PropsWithoutInjected<TProps> & InjectedProps>
) {
  return (props: PropsWithoutInjected<TProps>) => {
    const [initialState, setInitialState] = useState<AppState>({
      trips: [],
    });
    const [isLoading, setIsLoading] = useState<Boolean>(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
      const fetchInitialState = async () => {
        try {
          const data = await TripService.load();

          setInitialState({ trips: data });
        } catch (e: any) {
          setError(e);
          // display error page
        }
        setIsLoading(false);
      };
      fetchInitialState();
    }, []);
    if (isLoading) {
      return <Loading message="Loading..." />;
    }
    if (error) {
      return <Loading message={error.message} />;
    }
    return <WrappedComponent initialState={initialState} {...props} />;
  };
}

import axios from "axios";
import API from "../Api";
import { AppState } from "../state/AppStateReducer";

class TripService {
  authAxios = axios.create({
    baseURL: API.main_url,
  });

  save = (payload: AppState) => {
    // endpoint for saving is missing
    console.log(payload);
  };

  load = () => {
    return this.authAxios
      .get<AppState>("/trips")
      .then((response: any) => response.data);
  };
}

export default new TripService();

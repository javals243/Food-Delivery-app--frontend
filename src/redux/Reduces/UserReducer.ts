import { UserModel } from "../Models";
import { LocationGeocodedAddress as Address } from "expo-location";
import { UserState } from "../Models/index";
import { UserAction } from "../Actions/UserAction";

export const InitialState: UserState = {
  user: {} as UserModel,
  location: {} as Address,
  error: undefined,
};
const UserReducer = (state: UserState = InitialState, action: UserAction) => {
  switch (action.type) {
    case "ON_UPDATE_LOCATION":
      return { ...state, location: action.payload };
    case "ON_ERROR_USER":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export { UserReducer };

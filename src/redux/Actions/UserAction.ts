import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../utils";
import { LocationGeocodedAddress as Address } from "expo-location";
import { Dispatch } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface updateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: Address;
}
export interface UserActionError {
  readonly type: "ON_ERROR_USER";
  payload: any;
}

export type UserAction = updateLocationAction | UserActionError;

export const onUpdateLocation =
  (location: Address) => async (dispatch: Dispatch<UserAction>) => {
    try {
      const locationString = JSON.stringify(location);

      await AsyncStorage.setItem("user-local", locationString);
      dispatch({ type: "ON_UPDATE_LOCATION", payload: location });
    } catch (error) {
      dispatch({ type: "ON_ERROR_USER", payload: error });
    }
  };

import axios from "axios";
import { useDispatch } from "react-redux";
import { BASE_URL } from "../../utils";
import { LocationGeocodedAddress as Address } from "expo-location";
import { Dispatch } from "react";
import { FoodAvailability } from "../Models/index";

export interface AvailabilityAction {
  readonly type: "ON_AVAILIBILITY";
  payload: FoodAvailability;
}
export interface ShoppingError {
  readonly type: "ON_SHOPPING_ERROR";
  payload: any;
}

export type ShoppingAction = AvailabilityAction | ShoppingError;
export const onAvailibility =
  (postCode: string) => async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      const response = await axios.get<FoodAvailability>(
        `${BASE_URL}Foods/availability/${postCode}`
      );

      if (!response) {
        dispatch({ type: "ON_SHOPPING_ERROR", payload: "Availability error" });
      }
      dispatch({ type: "ON_AVAILIBILITY", payload: response.data });
    } catch (error) {
      dispatch({ type: "ON_SHOPPING_ERROR", payload: error });
    }
  };

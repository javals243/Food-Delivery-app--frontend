import axios from "axios";
import { BASE_URL } from "../../utils";
import { LocationGeocodedAddress as Address } from "expo-location";
import { Dispatch } from "react";
import { FoodAvailability } from "../Models/index";

//availability Action

export interface AvailabilityAction {
  readonly type: "ON_AVAILABILITY";
  payload: FoodAvailability;
}

export interface ShoppingErrorAction {
  readonly type: "ON_SHOPPING_ERROR";
  payload: any;
}

export type ShoppingAction = AvailabilityAction | ShoppingErrorAction;

//Trigger actions from components
export const onAvailability = (postCode: any) => {
  return async (dispatch: Dispatch<ShoppingAction>) => {
    try {
      const response = await axios.get<FoodAvailability>(
        `${BASE_URL}food/availability/${postCode}`
      );

      if (!response) {
        dispatch({
          type: "ON_SHOPPING_ERROR",
          payload: "Availability error",
        });
      } else {
        // save our location in local storage
        dispatch({
          type: "ON_AVAILABILITY",
          payload: response.data,
        });
      }
    } catch (error) {
      dispatch({
        type: "ON_SHOPPING_ERROR",
        payload: error,
      });
    }
  };
};

//Trigger actions from components

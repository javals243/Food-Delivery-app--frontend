import { FoodAvailability, ShoppingState } from "../Models/index";
import { ShoppingAction } from "../Actions/ShoppingAction";

export const InitialState = {
  Availability: {} as FoodAvailability,
};
const ShoppingReducer = (
  state: ShoppingState = InitialState,
  action: ShoppingAction
) => {
  switch (action.type) {
    case "ON_AVAILIBILITY":
      return {
        ...state,
        availability: action.payload,
      };
    case "ON_SHOPPING_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export { ShoppingReducer };

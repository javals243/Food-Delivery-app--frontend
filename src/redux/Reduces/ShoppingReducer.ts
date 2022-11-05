import { ShoppingAction } from "../Actions";
import { FoodAvailability, FoodModel, ShoppingState } from "../Models";

const initialState = {
  availability: {} as FoodAvailability,
  availableFoods: {} as [FoodModel],
};

const ShoppingReducer = (
  state: ShoppingState = initialState,
  action: ShoppingAction
) => {
  switch (action.type) {
    case "ON_AVAILABILITY":
      return {
        ...state,
        availability: action.payload,
      };

    default:
      return state;
  }
};

export { ShoppingReducer };

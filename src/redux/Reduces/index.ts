import { combineReducers } from "redux";
import { ShoppingReducer } from "./ShoppingReducer";
import { UserReducer } from "./UserReducer";

const RootReducer = combineReducers({
  ShoppingReducer: ShoppingReducer,
  UserReducer: UserReducer,
});
export type ApplicationState = ReturnType<typeof RootReducer>;
export { RootReducer };

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { RootReducer } from "./Reduces";

const store = createStore(RootReducer, applyMiddleware(thunk));

export { store };

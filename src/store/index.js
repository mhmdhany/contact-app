import { createStore } from "redux";
import { contactReducer } from "./reducers/contactReducer";
// Create store
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export const store = createStore(contactReducer, enhancer());

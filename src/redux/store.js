import { createStore } from "redux";
import { counterReducer } from "./counterExample/CounterReducer";

const store = createStore(counterReducer);
export default store;

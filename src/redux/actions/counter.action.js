import { INCREMENT, DECREMENT } from "../../constants";

export const incrementCounter = () => {
	return {
		type: INCREMENT,
	};
};

export const decrementCounter = () => {
	return {
		type: DECREMENT,
	};
};

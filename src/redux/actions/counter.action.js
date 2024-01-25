import { DECREMENT, INCREMENT } from "../../constants/counter.constant";

export const incrementCount = () => {
	return {
		type: INCREMENT,
	};
};

export const decrementCount = () => {
	return {
		type: DECREMENT,
	};
};

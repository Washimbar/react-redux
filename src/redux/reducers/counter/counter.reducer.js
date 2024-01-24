import { DECREMENT, INCREMENT } from "../../../constants";
import { initialCount } from "../../initial-states";

export const counterReducer = (state = initialCount, action) => {
	console.log(action);
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				count: state.count + 1,
			};
		case DECREMENT:
			return {
				...state,
				count: state.count - 1,
			};
		default:
			return state;
	}
};

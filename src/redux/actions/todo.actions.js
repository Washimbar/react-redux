import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../../constants";

export const addTodo = (title) => {
	return {
		type: ADD_TODO,
		payload: { title },
	};
};

export const deleteTodo = (id) => {
	return {
		type: DELETE_TODO,
		payload: { id },
	};
};

export const completeTodo = (id) => {
	return {
		type: COMPLETE_TODO,
		payload: { id },
	};
};

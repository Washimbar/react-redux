import { TODO } from "./todoTypes";

export const addTodo = () => {
	return {
		type: TODO.ADD_TODO,
	};
};
export const deleteTodo = () => {
	return {
		type: TODO.DELETE_TODO,
	};
};
export const completeTodo = () => {
	return {
		type: TODO.COMPLETE_TODO,
	};
};
export const updateTodo = () => {
	return {
		type: TODO.UPDATE_TODO,
	};
};

import { ADD_TODO, COMPLETE_TODO, DELETE_TODO } from "../../constants";

const initialState = {
	todos: [],
};

export const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: Date.now(),
						title: action.payload.title,
						completed: false,
					},
				],
			};
		case DELETE_TODO:
			return {
				...state,
				todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
			};
		case COMPLETE_TODO:
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, completed: !todo.completed }
						: todo
				),
			};
		default:
			return state;
	}
};

import React from "react";
import TodoChips from "./TodoChips";
import TodoInput from "./TodoInput";
import { useSelector } from "react-redux";

const TodoContainer = () => {
	const { todos } = useSelector((state) => state.todoReducer);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				flexDirection: "column",
				gap: "10px",
			}}
		>
			<TodoInput />
			{todos.map((todo) => (
				<TodoChips todo={todo} key={todo.id} />
			))}
		</div>
	);
};

export default TodoContainer;

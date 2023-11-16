import React, { useState } from "react";
import TodoCard from "./TodoCard";

const TodoApp = () => {
	const [text, setText] = useState();
	return (
		<div>
			<input onChange={(e) => setText(e.target.value)} type="text" />
			<p>{text}</p>
			<button></button>
			<TodoCard />
		</div>
	);
};

export default TodoApp;

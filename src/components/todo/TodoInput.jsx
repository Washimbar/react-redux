import React, { useState } from "react";
import { Button, TextInput } from "..";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions/todo.actions";

const TodoInput = () => {
	const [text, setText] = useState("");
	const handleText = (e) => {
		setText(e.target.value);
	};
	const dispatch = useDispatch();
	const handleAddTodo = () => {
		if (!text) {
			alert("Please enter a text");
			return;
		}
		dispatch(addTodo(text));
		setText("");
	};
	return (
		<div
			style={{
				display: "flex",
				gap: "20px",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<TextInput value={text} onChange={handleText} />
			<Button onClick={handleAddTodo} label="Add todo" />
		</div>
	);
};

export default TodoInput;

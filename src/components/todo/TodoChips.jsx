import React from "react";
import { Button, TextInput } from "..";
import styles from "./TodoChips.module.css";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../redux/actions/todo.actions";

const TodoChips = ({ todo }) => {
	const dispatch = useDispatch();
	return (
		<div className={styles.todoChips}>
			<h2>{todo?.title}</h2>
			<div>
				<Button onClick={() => dispatch(deleteTodo(todo.id))} label="Delete" />
				<Button
					onClick={() => dispatch(completeTodo(todo.id))}
					label={todo.completed ? "Completed" : "Uncompleted"}
				/>
			</div>
		</div>
	);
};

export default TodoChips;

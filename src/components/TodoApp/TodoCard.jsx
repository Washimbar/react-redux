import React from "react";

const TodoCard = ({ title }) => {
	return (
		<div >
			<p>{title}</p>
			<button>Complete</button>
			<button>Delete</button>
		</div>
	);
};

export default TodoCard;

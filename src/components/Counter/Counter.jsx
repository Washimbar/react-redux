import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	decrementCount,
	incrementCount,
} from "../../redux/actions/counter.action";

const Counter = () => {
	const { count } = useSelector((state) => state.counterReducer);
	const dispatch = useDispatch();

	return (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={() => dispatch(incrementCount())}>Increment</button>
			<button onClick={() => dispatch(decrementCount())}>Decrement</button>
		</div>
	);
};

export default Counter;

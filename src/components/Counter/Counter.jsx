import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "../../redux/actions";

const CounterContainer = () => {
	const count = useSelector((state) => state.counterReducer);
	const dispatch = useDispatch();
	const incCount = () => {
		dispatch(incrementCounter());
	};
	const decCount = () => {
		dispatch(decrementCounter());
	};
	return (
		<div>
			<h1>Count: {count?.count}</h1>
			<button onClick={incCount}>Inc</button>
			<button onClick={decCount}>Inc</button>
		</div>
	);
};

export default CounterContainer;

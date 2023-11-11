import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decCount, incCount } from "../../redux/counterExample/CounterActions";

const Counter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state) => state.count);

	const inc = () => {
		dispatch(incCount());
	};
	const dec = () => {
		dispatch(decCount());
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={inc}>Inc</button>
			<button onClick={dec}>Dec</button>
		</div>
	);
};

export default Counter;

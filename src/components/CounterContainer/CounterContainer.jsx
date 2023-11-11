import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCont,
  incrementCont,
} from "../../redux/counter/counterAction";

const CounterContainer = () => {
  const count = useSelector((state) => state.count);
  console.log(count);
  const dispatch = useDispatch();
  const incCount = () => {
    dispatch(incrementCont());
  };
  const decCount = () => {
    dispatch(decrementCont());
  };
  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={incCount}>Increment</button>
      <button onClick={decCount}>Decrement</button>
    </div>
  );
};

export default CounterContainer;

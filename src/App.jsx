import React from "react";
import { TodoContainer } from "./components";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux";

const App = () => {
	return (
		<Provider store={store}>
			<TodoContainer />
		</Provider>
	);
};

export default App;

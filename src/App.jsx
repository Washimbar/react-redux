import "./App.css";
import { Provider } from "react-redux";
import store from "./redux";
import { Counter } from "./components";

function App() {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
}

export default App;

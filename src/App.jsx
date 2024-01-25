import "./App.css";
import { Provider } from "react-redux";

import Counter from "./components/Counter/Counter";
import store from "./redux/store/store";

function App() {
	return (
		<Provider store={store}>
			<Counter />
		</Provider>
	);
}

export default App;

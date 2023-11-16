import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Counter from "./components/CounterExample/Counter";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
	return (
		<Provider store={store}>
			<TodoApp />
		</Provider>
	);
}

export default App;

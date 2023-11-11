import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CounterContainer from "./components/CounterContainer/CounterContainer";

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;

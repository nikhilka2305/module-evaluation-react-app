import "./App.css";
import ContactManager from "./components/ContactManager";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./features/store";

function App() {
	return (
		<>
			<Header />
			<Provider store={store}>
				<ContactManager />
			</Provider>
		</>
	);
}

export default App;

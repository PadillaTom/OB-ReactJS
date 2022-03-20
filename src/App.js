import logo from "./logo.svg";
import "./App.css";

import { GreetingFunctional } from "./components/pure";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* Greeting */}
				{/* <Greeting name="Tomas"></Greeting> */}
				<GreetingFunctional name="Tom"></GreetingFunctional>
			</header>
		</div>
	);
}

export default App;

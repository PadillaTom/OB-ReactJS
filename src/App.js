import "./App.css";

import TaskListComponent from "./components/container/TaskListComponent";
import { Ejemplo1, Ejemplo2, MiComponenteConContexto, Ejemplo4 } from "./hooks";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* Task List */}
				<TaskListComponent></TaskListComponent>

				{/* Ejemplo HOOKS  */}
				{/* <Ejemplo1></Ejemplo1> */}
				{/* <Ejemplo2></Ejemplo2> */}
				{/* <MiComponenteConContexto></MiComponenteConContexto> */}
				{/* <Ejemplo4 name="Tomas">
					<h3>Esto es un Children</h3>
				</Ejemplo4> */}
			</header>
		</div>
	);
}

export default App;

import "./App.css";

import { Ejemplo1, Ejemplo2, MiComponenteConContexto, Ejemplo4 } from "./hooks";
import TaskListComponent from "./components/container/TaskListComponent";
import Father from "./components/container/Father";
import { GreetingStyled } from "./components/pure";

function App() {
	return (
		<div className="App">
			{/* Task List */}
			<TaskListComponent></TaskListComponent>

			{/* Ejemplo HOOKS  */}
			{/* <Ejemplo1></Ejemplo1> */}
			{/* <Ejemplo2></Ejemplo2> */}
			{/* <MiComponenteConContexto></MiComponenteConContexto> */}
			{/* <Ejemplo4 name="Tomas">
					<h3>Esto es un Children</h3>
				</Ejemplo4> */}

			{/* Styles CSS - SASS */}
			{/* <GreetingStyled name="Tomas"></GreetingStyled> */}

			{/* Father - Child */}
			<Father></Father>
		</div>
	);
}

export default App;

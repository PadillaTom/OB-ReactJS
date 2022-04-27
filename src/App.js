import "./App.css";

import { Ejemplo1, Ejemplo2, MiComponenteConContexto, Ejemplo4 } from "./hooks";
import TaskListComponent from "./components/container/TaskListComponent";
import Father from "./components/container/Father";
import { GreetingStyled } from "./components/pure";
import OptionalRender from "./components/pure/OptionalRender";
import LoginForkmik from "./components/forms/LoginForkmik";
import RegisterFormik from "./components/forms/RegisterFormik";
import AsyncExample from "./components/pure/AsyncExample";
import ObservableExample from "./components/pure/ObservableExample";
import FetchExample from "./components/pure/FetchExample";

function App() {
	return (
		<div className="App">
			{/* :::: PROYECTO FINAL :::: */}
			{/* <TaskListComponent></TaskListComponent> */}

			{/* :::: EJEMPLOS :::: */}

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
			{/* <Father></Father> */}

			{/* Conditional Rendering */}
			{/* <OptionalRender></OptionalRender> */}

			{/* Formik y Yup */}
			{/* <LoginForkmik></LoginForkmik> */}
			{/* <RegisterFormik></RegisterFormik> */}

			{/* Async */}
			{/* <AsyncExample></AsyncExample> */}
			{/* <ObservableExample></ObservableExample> */}

			{/* Fetch */}
			<FetchExample></FetchExample>
		</div>
	);
}

export default App;

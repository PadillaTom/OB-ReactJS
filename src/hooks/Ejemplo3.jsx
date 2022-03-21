import React, { useState, useContext } from "react";
const miContext = React.createContext(null);

const Componente1 = () => {
	const state = useContext(miContext);
	return (
		<div>
			<h1>El Token es: {state.token}</h1>
			<Componente2></Componente2>
		</div>
	);
};

const Componente2 = () => {
	const state = useContext(miContext);
	return (
		<div>
			<h2>La Session es: {state.session}</h2>
		</div>
	);
};

const MiComponenteConContexto = () => {
	const estadoInicial = {
		toke: "1234567",
		session: 1,
	};
	const [sessionData, setSessionData] = useState(estadoInicial);

	const actualizarSession = () => {
		setSessionData({
			token: "JWT1234567",
			session: sessionData.session + 1,
		});
	};

	return (
		<miContext.Provider value={sessionData}>
			<Componente1></Componente1>
			<button onClick={actualizarSession}>Actualizar Session</button>
		</miContext.Provider>
	);
};

export default MiComponenteConContexto;

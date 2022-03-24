import React, { useState } from "react";

// Login Button:
const LoginButton = ({ action, style }) => {
	return (
		<button onClick={action} style={style}>
			{" "}
			Login{" "}
		</button>
	);
};
// Logout Button:
const LogoutButton = ({ action, style }) => {
	return (
		<button onClick={action} style={style}>
			{" "}
			Logout{" "}
		</button>
	);
};

// Estilos en Constantes:
const loggedStyle = {
	color: "white",
	backgroundColor: "green",
	fontWeight: "bold",
};
const unloggedStyle = {
	color: "white",
	backgroundColor: "tomato",
	fontWeight: "bold",
};

const OptionalRender = () => {
	const [access, setAccess] = useState(false);
	const [nMessages, setNMessages] = useState(0);

	// const updateAccess = () => {
	// 	setAccess(!access);
	// };

	const loginAction = () => {
		setAccess(true);
	};
	const logoutAction = () => {
		setAccess(false);
	};

	let optionalButton;

	// EJ 1:
	// if (access) {
	// 	optionalButton = <button onClick={updateAccess}>Logout</button>;
	// } else {
	// 	optionalButton = <button onClick={updateAccess}>Login</button>;
	// }

	// EJ 2:
	if (access) {
		optionalButton = (
			<LogoutButton style={loggedStyle} action={logoutAction}></LogoutButton>
		);
	} else {
		optionalButton = (
			<LoginButton style={unloggedStyle} action={loginAction}></LoginButton>
		);
	}

	// EJ 3:
	let addMessages = () => {
		setNMessages(nMessages + 1);
	};

	return (
		<div>
			{/* Button Login-Logout */}
			{optionalButton}

			{/* Messagess */}
			{/* {nMessages > 0 && <p>You have {nMessages} new messages...</p>}
			{nMessages == 0 && <p>You have NO messages...</p>} */}
			{/* {nMessages > 0 ? (
				<p>
					You have {nMessages} new message{nMessages > 1 ? "s" : null}...
				</p>
			) : (
				<p>You have NO messages...</p>
			)}			
			<button onClick={addMessages}>
				{nMessages === 0 ? "Add your first Message" : "Add New Message"}
			</button> */}

			{/* Todo Condicional segun LOGIN */}
			{access ? (
				<div>
					{nMessages > 0 ? (
						<p>
							You have {nMessages} new message{nMessages > 1 ? "s" : null}...
						</p>
					) : (
						<p>You have NO messages...</p>
					)}
					<button onClick={addMessages}>
						{nMessages === 0 ? "Add your first Message" : "Add New Message"}
					</button>
				</div>
			) : null}
		</div>
	);
};

export default OptionalRender;

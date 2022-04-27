import React, { useState, useEffect } from "react";
import { getAllUsers, login } from "../../services/fetchService";

const FetchExample = () => {
	const [users, setUsers] = useState(null);
	useEffect(() => {
		// obtainUsers();
		loginUser();
	}, []);

	// === GET USERS ===
	// const obtainUsers = () => {
	// 	getAllUsers()
	// 		.then((response) => {
	// 			console.log(response);
	// 			setUsers(response);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		})
	// 		.finally(() => {
	// 			console.log("Done Fetching");
	// 			console.table(users);
	// 		});
	// };

	// === LOGIN ===
	const loginUser = () => {
		login("eve.holt@reqres.in", "cityslicka")
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {
				console.log("Done Fetching");
			});
	};
	return (
		<div>
			<h2>Fetch Example</h2>
			<hr />
			<h4>Users:</h4>
			<h4>NO FUNCIONA LA API, pero vimos GET por Params, All</h4>
			{/* {users.map((i, index) => {
				<p key={index}>i.first_name</p>;
			})} */}
			<hr />
			<h2>Login</h2>
		</div>
	);
};

export default FetchExample;

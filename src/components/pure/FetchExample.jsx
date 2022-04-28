import React, { useState, useEffect } from "react";
import { getAllUsers, login } from "../../services/fetchService";
import { getAllProfessions } from "../../services/axiosService";

const FetchExample = () => {
	const [prof, setProf] = useState(null);
	useEffect(() => {
		// obtainUsers();
		// loginUser();

		// Axios:
		getAllProfessions()
			.then((response) => {
				console.log(response.data);
				setProf(response.data);
			})
			.catch((err) => {
				console.log(err);
			});
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
	// const loginUser = () => {
	// 	login("patient1@test.com", "12345678")
	// 		.then((response) => {
	// 			console.log(response);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err.message);
	// 		})
	// 		.finally(() => {
	// 			console.log("Done Fetching");
	// 		});
	// };

	// === AXIOS ===

	if (prof) {
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
				<h4>NO FUNCIONA LA API, pero vimos POST por Body</h4>
				<hr />
				<h2>Axios</h2>
				<span>Professions</span>
				{prof.map((i) => {
					return <span key={i.id}>||{i.title}</span>;
				})}
			</div>
		);
	} else {
		return <h2>Loading...</h2>;
	}
};

export default FetchExample;

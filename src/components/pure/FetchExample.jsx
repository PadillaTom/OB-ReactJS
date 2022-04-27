import React, { useState, useEffect } from "react";
import { getAllUsers } from "../../services/fetchService";

const FetchExample = () => {
	const [users, setUsers] = useState(null);
	useEffect(() => {
		obtainUsers();
	}, []);

	const obtainUsers = () => {
		getAllUsers()
			.then((response) => {
				console.log(response);
				setUsers(response);
			})
			.catch((err) => {
				console.log(err.message);
			})
			.finally(() => {
				console.log("Done Fetching");
				console.table(users);
			});
	};

	return (
		<div>
			<h2>Fetch Example</h2>
			<h4>Users:</h4>
			{/* {users.map((i, index) => {
				<p key={index}>i.first_name</p>;
			})} */}
		</div>
	);
};

export default FetchExample;

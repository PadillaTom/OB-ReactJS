import React, { useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Link,
	Navigate,
} from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/home/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailsPage from "./pages/tasks/TaskDetailsPage";
import LoginPage from "./pages/auth/LoginPage";

const AppRoutingOne = () => {
	let isLogged = false;

	useEffect(() => {
		isLogged = localStorage.getItem("credentials");
		console.log(isLogged);
	}, []);

	// TaskList
	const myTaskList = [
		{ id: "1", name: "Tom" },
		{ id: "2", name: "Katy" },
	];

	return (
		<Router>
			<div className="nav">
				<Link to="/">Home</Link>
				<Link to="/login">Login</Link>
				<Link to="/task/1">T1</Link>
				<Link to="/task/2">T2</Link>

				{/* <Link to="/about">About</Link>
				<Link to="/faqs">Faqs</Link>
				<Link to="/hola">Error</Link> */}
			</div>
			<Routes>
				<Route exact path="/" element={<HomePage></HomePage>}></Route>
				<Route exact path="/login" element={<LoginPage></LoginPage>}></Route>
				<Route path="/about" element={<AboutPage></AboutPage>}></Route>
				<Route path="/faqs" element={<AboutPage></AboutPage>}></Route>
				<Route
					path="/profile"
					element={
						isLogged ? (
							<ProfilePage></ProfilePage>
						) : (
							<Navigate replace to="/login"></Navigate>
						)
					}
				></Route>
				<Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
				<Route
					exact
					path="/task/:id"
					element={<TaskDetailsPage tasks={myTaskList}></TaskDetailsPage>}
				></Route>
				<Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
			</Routes>
		</Router>
	);
};

export default AppRoutingOne;

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
import Dashboard from "./pages/dashboard/Dashboard";

const AppRoutingFinal = () => {
	// TODO - Get value from Storage
	const isLogged = true;

	return (
		<Router>
			<Routes>
				{/* === PROTECTED === */}
				<Route
					path="/"
					exact
					element={
						isLogged ? (
							<Navigate replace to="/dashboard"></Navigate>
						) : (
							<Navigate replace to="/login"></Navigate>
						)
					}
				></Route>
				<Route
					path="/dashboard"
					exact
					element={
						isLogged ? (
							<Dashboard></Dashboard>
						) : (
							<Navigate replace to="/login"></Navigate>
						)
					}
				></Route>

				{/* === PUBLIC === */}
				<Route path="/login" element={<LoginPage></LoginPage>}></Route>
				<Route path="*" element={NotFoundPage}></Route>
			</Routes>
		</Router>
	);
};

export default AppRoutingFinal;

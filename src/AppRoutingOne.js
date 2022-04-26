import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/home/AboutPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import TasksPage from "./pages/tasks/TasksPage";
import TaskDetailsPage from "./pages/tasks/TaskDetailsPage";

const AppRoutingOne = () => {
	return (
		<Router>
			<div className="nav">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/faqs">Faqs</Link>
				<Link to="/hola">Error</Link>
			</div>
			<Routes>
				<Route exact path="/" element={<HomePage></HomePage>}></Route>
				<Route path="/about" element={<AboutPage></AboutPage>}></Route>
				<Route path="/faqs" element={<AboutPage></AboutPage>}></Route>
				<Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
				<Route path="/tasks" element={<TasksPage></TasksPage>}></Route>
				<Route
					path="/task/:id"
					element={<TaskDetailsPage></TaskDetailsPage>}
				></Route>
				<Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
			</Routes>
		</Router>
	);
};

export default AppRoutingOne;

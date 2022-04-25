import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {
	const nav = useNavigate();

	const navigate = (path) => {
		nav(path);
	};

	const goFow = () => {
		nav(1);
	};

	return (
		<div>
			HomePage
			<button
				onClick={() => {
					navigate("/profile");
				}}
			>
				Profile
			</button>
			<button
				onClick={() => {
					goFow();
				}}
			>
				Fow
			</button>
		</div>
	);
};

export default HomePage;

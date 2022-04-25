import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AboutPage = () => {
	const location = useLocation();
	const nav = useNavigate();

	const navigate = (path) => {
		nav(path);
	};

	const goBack = () => {
		nav(-1);
	};
	const goFow = () => {
		nav(1);
	};

	console.log("We are in Route: ", location.pathname);
	return (
		<div>
			<h2>About | FAQS</h2>
			<div className="btns">
				<button
					onClick={() => {
						navigate("/");
					}}
				>
					Home
				</button>
				<button
					onClick={() => {
						goBack();
					}}
				>
					Back
				</button>
				<button
					onClick={() => {
						goFow();
					}}
				>
					Forward
				</button>
			</div>
		</div>
	);
};

export default AboutPage;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
	const nav = useNavigate();
	const goBack = () => {
		nav(-1);
	};
	return (
		<div>
			ProfilePage
			<button
				onClick={() => {
					goBack();
				}}
			>
				Back
			</button>
		</div>
	);
};

export default ProfilePage;

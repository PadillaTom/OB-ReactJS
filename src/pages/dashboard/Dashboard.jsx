import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Copyright from "../../components/pure/Final/Copyright";

const Dashboard = () => {
	const nav = useNavigate();
	const handleLogout = () => {
		nav("/login");
	};
	return (
		<div>
			<Button
				variant="contained"
				onClick={() => {
					handleLogout();
				}}
			>
				Logout
			</Button>
			<Copyright></Copyright>
		</div>
	);
};

export default Dashboard;

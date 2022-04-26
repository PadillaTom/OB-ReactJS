import React from "react";
import { useParams } from "react-router-dom";

const TaskDetailsPage = () => {
	const { id } = useParams();
	return (
		<div>
			<h2>Task Details for: {id}</h2>
		</div>
	);
};

export default TaskDetailsPage;

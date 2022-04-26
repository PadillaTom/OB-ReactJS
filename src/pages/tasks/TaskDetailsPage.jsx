import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TaskDetailsPage = ({ tasks }) => {
	const { id } = useParams();
	const [myTask, setMyTask] = useState();
	useEffect(() => {
		const task = tasks.filter((curr) => curr.id === id);
		console.log(task);
		setMyTask(task[0]);
	}, [id]);

	return (
		<div>
			<h2>Task Details for: {id}</h2>
			<h2>Task name for: {myTask?.name}</h2>
		</div>
	);
};

export default TaskDetailsPage;

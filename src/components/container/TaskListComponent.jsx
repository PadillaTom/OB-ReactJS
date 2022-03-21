import React, { useState, useEffect } from "react";

import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

import TaskComponent from "../pure/Task";

const TaskListComponent = () => {
	const defaultTask = new Task(
		"Example Task",
		"Default Description",
		true,
		LEVELS.NORMAL
	);

	// States:
	const [tasks, setTasks] = useState([defaultTask]);
	const [loading, setLoading] = useState(true);

	// Effect:
	useEffect(() => {
		console.log("Task State = Fue modificado.");
		setLoading(false);
		return () => {
			console.log("TaskList (CLEANUP) =  Sera UNMOUNT");
		};
	}, [tasks]);

	// Methods:
	const changeCompleted = (id) => {
		console.log();
	};

	// RENDER:
	return (
		<div>
			<div>Your Tasks:</div>
			<TaskComponent task={defaultTask}></TaskComponent>
		</div>
	);
};

export default TaskListComponent;

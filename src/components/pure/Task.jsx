import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "../../styles/task.scss";
import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
	let myLevel = task.level;
	myLevel = myLevel.charAt(0).toUpperCase() + myLevel.slice(1);

	useEffect(() => {
		console.log("Task Creada");
		return () => {
			console.log("Task is going to UNMOUNT");
		};
	}, [task]);

	return (
		<React.Fragment>
			<div>
				<h2 className="task-name">Nombre: {task.name}</h2>
				<h3>Desc: {task.description}</h3>
				<h4>Level: {myLevel}</h4>
				<h5> Task is: {task.completed ? "Completed" : "Pending"}</h5>
			</div>
		</React.Fragment>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

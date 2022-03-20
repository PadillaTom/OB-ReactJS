import React from "react";
import PropTypes from "prop-types";

import { Task } from "../../models/task.class";

const TaskComponent = ({ task }) => {
	return (
		<React.Fragment>
			<div>
				<h2>Nombre: {task.name}</h2>
				<h3>Desc: {task.description}</h3>
				<h4>Level: {task.level}</h4>
				<h5> Task is: {task.completed ? "Completed" : "Pending"}</h5>
			</div>
		</React.Fragment>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

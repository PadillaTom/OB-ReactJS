import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "../../styles/task.scss";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

const TaskComponent = ({ task }) => {
	useEffect(() => {
		console.log("Task Creada");
		return () => {
			console.log("Task is going to UNMOUNT");
		};
	}, [task]);

	// Methods:
	const taskLevelBadge = () => {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0">
						<span className="badge bg-primary">{task.level}</span>
					</h6>
				);
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0">
						<span className="badge bg-warning">{task.level}</span>
					</h6>
				);
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0">
						<span className="badge bg-danger">{task.level}</span>
					</h6>
				);
			default:
				break;
		}
	};
	const taskCompletedIcon = () => {
		return task.completed ? (
			<i className="bi-toggle-on" style={{ color: "green" }}></i>
		) : (
			<i className="bi-toggle-off" style={{ color: "grey" }}></i>
		);
	};

	return (
		<React.Fragment>
			<tr className="fw-normal">
				<th>
					<span className="ms-2">{task.name}</span>
				</th>
				<td className="align-middle">
					<span className="ms-2">{task.description}</span>
				</td>
				<td className="align-middle">{taskLevelBadge()}</td>
				<td className="align-middle">
					{taskCompletedIcon()}
					<i
						className="bi-trash"
						style={{ color: "tomato", fontWeight: "bold" }}
					></i>
				</td>
			</tr>
		</React.Fragment>
	);
};

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task),
};

export default TaskComponent;

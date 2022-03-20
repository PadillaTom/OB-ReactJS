import React from "react";

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

    // Methods:
    const changeState = (id)=> {
        console.log();
    }

    // RENDER:
	return (
		<div>
			<div>Your Tasks:</div>
			<TaskComponent task={defaultTask}></TaskComponent>
		</div>
	);
};

export default TaskListComponent;

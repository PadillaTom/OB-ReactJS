import React, { useState, useEffect } from "react";

import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

import TaskComponent from "../pure/Task";
import TaskForm from "../forms/TaskForm";

const TaskListComponent = () => {
	const defaultTask = new Task("Task 1", "Normal Task", true, LEVELS.NORMAL);
	const defaultTask2 = new Task("Task 2", "Urgent Task", false, LEVELS.URGENT);
	const defaultTask3 = new Task(
		"Task 3",
		"Blocking Task",
		false,
		LEVELS.BLOCKING
	);

	// States:
	const [tasks, setTasks] = useState([defaultTask, defaultTask2, defaultTask3]);
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
	const completeTask = (myTask) => {
		const index = tasks.indexOf(myTask); // 1) Find our Tasks by INDEX
		const tempTasks = [...tasks]; // 2) Copy Array, Change COMPLETED of our found Task.
		tempTasks[index].completed = !tempTasks[index].completed;
		setTasks(tempTasks); // 3) SetTasks
	};

	const deleteTask = (myTask) => {
		const index = tasks.indexOf(myTask);
		const tempTasks = [...tasks];
		tempTasks.splice(index, 1); // Delete found Task from Array.
		setTasks(tempTasks);
	};

	const addTask = (myTask) => {
		const tempTasks = [...tasks];
		tempTasks.push(myTask);
		setTasks(tempTasks);
	};

	// RENDER:
	return (
		<div>
			<div className="col-12">
				{/* DISPLAY Tasks */}
				<div className="card">
					{/* Title */}
					<div className="card-header p-3">
						<h5>Your Tasks:</h5>
					</div>
					{/* Body */}
					<div
						className="card-body"
						style={{
							position: "relative",
							height: "400px",
						}}
						data-mdb-perfect-scrollbar="true"
					>
						<table>
							<thead>
								<tr>
									<th scope="col">Title</th>
									<th scope="col">Description</th>
									<th scope="col">Priority</th>
									<th scope="col">Actions</th>
								</tr>
							</thead>
							<tbody>
								{/* TaskList */}
								{tasks.map((singleTask, index) => {
									return (
										<TaskComponent
											key={index}
											task={singleTask}
											complete={completeTask}
											remove={deleteTask}
										></TaskComponent>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
				{/* FORM Tasks */}
			</div>
			<TaskForm add={addTask}></TaskForm>
		</div>
	);
};

export default TaskListComponent;

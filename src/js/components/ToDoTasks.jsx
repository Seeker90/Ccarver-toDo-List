import { useState } from "react";


const ToDoTask = ({todos, setTodos}) => {
	//create the deleteTask function here

	let renderTasks = todos.map(todo => {
		return (
			<li className="list-item" key={todos.id}>
				<label> {todo.title}</label>
				{/*Create button here and link to deleteTask*/}
			</li>

		);


	})

	return (
		<>
		<div className="main">
			<ul className="toDo-List">
				{ToDoTask.length !== 0 ? renderTasks : "No task. Add a task."}
			</ul>
			
		</div>
		</>
	);
};

export default ToDoTask;
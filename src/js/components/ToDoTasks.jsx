import { useState } from "react";
import "../../img/x-close-delete-svgrepo-com.svg"


const ToDoTask = ({todos, setTodos}) => {
	//create the deleteTask function here

	let renderTasks = todos.map(todo => {
		return (
			<li className="list-item" key={todo.id}>
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
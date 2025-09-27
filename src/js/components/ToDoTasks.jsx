import { useState } from "react";
import "../../img/x-close-delete-svgrepo-com.svg"


const ToDoTask = ({todos, setTodos}) => {
	const deleteTask = (todoID) => {
		let updatedTodos = todos.filter(todo => todo.id !== todoID ); setTodos(updatedTodos)

	};

	let renderTasks = todos.map(todo => {
		return (
			<li className="list-item flex justify-content-between items-center p-3 border-p group list-unstyled" key={todo.id}>
				<label> {todo.label}</label>
				<button 
				className="delete-task"
				onClick={() => {deleteTask(todo.id)}}
				>X</button>
			</li>

		);


	})

	return (
		<>
		<div className="main">
			<ul className="toDo-List p-3 text-gray-400">
				{ToDoTask.length !== 0 ? renderTasks : "No task. Add a task."}
			</ul>
			
		</div>
		</>
	);
};

export default ToDoTask;
import ToDoInput from "./ToDoInput.jsx";
import ToDoTask from "./ToDoTasks.jsx";
import ToDoFooter from "./ToDoFooter.jsx";
import {useState } from "react";

let testTodos = [

	{id:1,
		title: 'Wash car',
	},
	// {
	// 	id: 2,
	// 	title: 'walk the dog',
	// }
]



const ToDoApp = () => {
	const [todos, setTodos] = useState (testTodos);

	return (
		<>
		<ToDoInput/>
		<ToDoTask todos = {todos} setTodos={setTodos}/>
		<ToDoFooter todos= {todos}/>
		</>
	);
};

export default ToDoApp;
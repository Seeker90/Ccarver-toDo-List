import ToDoInput from "./ToDoInput.jsx";
import ToDoTask from "./ToDoTasks.jsx";
import ToDoFooter from "./ToDoFooter.jsx";
import {useState } from "react";

const ToDoApp = () => {
	const [todos, setTodos] = useState ([]);

	return (
		<>
		<ToDoInput todos={todos} setTodos={setTodos}/>
		<ToDoTask todos={todos} setTodos={setTodos}/>
		<ToDoFooter todos={todos}/>
		</>
	);
};

export default ToDoApp;
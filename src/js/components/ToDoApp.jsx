import ToDoInput from "./ToDoInput.jsx";
import ToDoTask from "./ToDoTasks.jsx";
import ToDoFooter from "./ToDoFooter.jsx";
import {useState } from "react";

const ToDoApp = () => {
	const [todos, setTodos] = useState ([]);

	return (
		<>
			<div className="main flex bg-gray-100 flex-col items-center justify-content-center ">
				<h1 className="header text-6xl text-pink-200 mb-6">todos</h1>
			<div className="input-master bg-white shadow-lg rounded-lg w-96"><ToDoInput todos={todos} setTodos={setTodos}/>
				</div>
			<div><ToDoTask todos={todos} setTodos={setTodos}/></div>
			<div className="foot"><ToDoFooter todos={todos}/></div>
			</div>

		</>
	);
};

export default ToDoApp;
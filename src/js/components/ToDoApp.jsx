import ToDoInput from "./ToDoInput.jsx";
import ToDoTask from "./ToDoTasks.jsx";
import ToDoFooter from "./ToDoFooter.jsx";
import {useState, useEffect } from "react";
import { getData } from "./Fetch.js";
import "../../styles/index.css"

const ToDoApp = () => {
	const [todos, setTodos] = useState ([]);

	useEffect(() => {
			
		getData(setTodos);
	}, [])

	return (
		<>
			<div className="main flex flex-col items-center justify-content-center ">
				<h1 className="header text-6xl mb-6">todos</h1>
			<div className="input-master bg-white shadow-lg rounded-lg w-96"><ToDoInput todos={todos} setTodos={setTodos}/>
				</div>
			<div className="task"><ToDoTask todos={todos} setTodos={setTodos}/></div>
			<div className="foot"><ToDoFooter todos={todos}/></div>
			
			</div>
			<div className="empty"></div>
			<div className="clear"></div>
		</>
	);
};

export default ToDoApp;
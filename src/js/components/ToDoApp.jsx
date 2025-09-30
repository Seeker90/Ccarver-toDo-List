import ToDoInput from "./ToDoInput.jsx";
import ToDoTask from "./ToDoTasks.jsx";
import ToDoFooter from "./ToDoFooter.jsx";
import {useState, useEffect } from "react";
import { getData } from "./Fetch.js";
import "../../styles/index.css"
import CreateUser from "./Create_User.jsx";
import Modal from "./modal.jsx";

const ToDoApp = () => {
	const [todos, setTodos] = useState ([]);
	const [username , setUsername] = useState("")

	useEffect(() => {
			
		getData(setTodos);
	}, [])

	return (
		<>
			<div className="main flex flex-col items-center justify-content-center ">
				<h1 className="header text-6xl mb-6">todos</h1>
			<div className="input-master bg-white shadow-lg rounded-lg w-96 mb-3"><CreateUser username={username} setUsername={setUsername}/>
			</div>
			{/* <Modal className="modal"/> */}
			<div>
			<div className="input-master bg-white shadow-lg rounded-lg w-96"><ToDoInput todos={todos} setTodos={setTodos}/>
				</div>
			<div className="task"><ToDoTask todos={todos} setTodos={setTodos}/></div>
			<div className="foot"><ToDoFooter todos={todos} setTodos={setTodos} username={username}/></div>
			
			</div>
			<div className="empty"></div>
			<div className="clear"></div>
			</div>
		</>
	);
};

export default ToDoApp;
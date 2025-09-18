import ToDoInput from "./ToDoInput";
import ToDoTask from "./ToDoTasks";
import ToDoFooter from "./ToDoFooter";
import { useEffect, useState } from "react";

const ToDoApp = () => {
	const [todos,setTodos] =useState([]);
	const [count, setCount] = useState(0);

	useEffect (() =>{setCount(todos.length)},[todos])
	
	
	
	
	return (
		<div className="text-center">
          
        <ToDoInput/>
		<ToDoTask/>
		<ToDoFooter/>
		</div>
	);
};

export default ToDoApp;
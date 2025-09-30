// name array 'todos' from todotasks
import { useState } from "react";
import { postData } from "./Fetch";


const ToDoInput = ({todos, setTodos}) => {
    const[newTask, setNewTask]=useState("");
    const addTask = () => {
        console.log("creating new todo object to append", newTask)
   
    let newToDoObject = {
        label: newTask,
        is_done: false
    };
    postData(setTodos,newToDoObject);
    setNewTask("")
       
    };

    
    const checkTextBox = () => {
        let textBox = document.querySelector(".new-todo");
        if (textBox.value === "") {
            alert("Please adda new task.");
        }
            else {
                addTask();
             }       
        }
    return(
        <>
		<input
            type="text"
            className="new-todo w-full p-3 border-b outline-none"
            placeholder="What needs to be done?"
            value={newTask}
            onChange={event=> setNewTask(event.target.value)}
        />
		<button
            className="add-task"
            onClick={checkTextBox}
            >Add task</button>
        
        </>
    )
}

export default ToDoInput;
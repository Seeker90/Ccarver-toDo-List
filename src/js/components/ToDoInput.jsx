// name array 'todos' from todotasks
import { useState } from "react";
const ToDoInput = ({todos, setTodos}) => {
    const[newTask, setNewTask]=useState("");
    const [counter, setCounter] = useState(0);
    const addTask = () => {
        console.log("creating new todo object to append", newTask)
   
    let newToDoObject = {
        id: counter,
        title: newTask,
    };
        setTodos([...todos, newToDoObject])
        setCounter(counter +1)
         setNewTask("")
       
    };

    
    const checkTextBox = ({setTodos}) => {
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
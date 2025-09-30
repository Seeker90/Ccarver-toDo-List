import { deleteAllTasksFromAPI } from "./Fetch";
const ToDoFooter = ({todos,setTodos, username}) => {
	 
	const deleteAllTasks = async() => {
		deleteAllTasksFromAPI(username, setTodos);
    	setTodos([]);
   }
	
	return (
		<>
	
         <footer className="p-2 text-sm text-gray-400 d-flex justify-content-evenly">
          {todos.length !== 1 ? `${todos.length} items left`: `${todos.length} item left`} 		
        <button
          className="delete-all btn btn-danger"
          onClick={deleteAllTasks}
		>
          Delete All Tasks
        </button>
		</footer>

		
		</>
	);
};

export default ToDoFooter;
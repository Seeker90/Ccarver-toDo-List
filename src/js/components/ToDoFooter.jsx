
const ToDoFooter = ({todos}) => {
	
	
	return (
		<>
	
         <footer className="p-2 text-sm text-gray-400">
          {todos.length !== 1 ? `${todos.length} items left`: `${todos.length} item left`} 
        </footer>

		
		</>
	);
};

export default ToDoFooter;
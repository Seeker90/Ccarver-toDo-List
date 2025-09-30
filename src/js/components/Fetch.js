//Post create user
export const postNewUser = async(username) => {
    let options = {
        method: "POST"
    }
    const response = await fetch(`https://playground.4geeks.com/todo/todos/${username}`, options)
    if(response.status === 400){
        let data = await response.json()
        return data.detail
    }
}

//get single user data
export const getData = async(setTodos) => {
			const response = await fetch(`https://playground.4geeks.com/todo/users/ccarver`)
			if (!response.ok) {
				console.log('error: ', response.status, response.statusText);
        		return {error: {status: response.status, statusText: response.statusText}};
			}
			const data = await response.json();
			setTodos(data.todos)
		}
//POST create new User to do
export const postData = async(setTodos,newToDoObject) => {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newToDoObject),
        }     
        const response = await fetch(`https://playground.4geeks.com/todo/todos/ccarver`, options)
        if (!response.ok) {
				console.log('error: ', response.status, response.statusText);
        		return {error: {status: response.status, statusText: response.statusText}};
			}
        console.log("Successful posted new todo!")
        getData(setTodos);
    }
    //Delete User todo
    export const deleteTask = async (todoId, setTodos) => {
        let options = {
            method: "DELETE",
        }
        const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, options)
        if (response.status === 404) {
				throw new Error(`Error Todo ID # ${todoId} doesn't exist!`);
			}
        getData(setTodos);
    }

    //delete all
  export const deleteAllTasksFromAPI = async (username, setTodos) => {
  const response = await fetch(`https://playground.4geeks.com/todo/todos/${username}`, {
    method: "DELETE",
   
  });
    if (!response.ok) {
				console.log('error: ', response.status, response.statusText);
        		return {error: {status: response.status, statusText: response.statusText}};
			}
        console.log("Successful deleted all!")

  setTodos([]);
};
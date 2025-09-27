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
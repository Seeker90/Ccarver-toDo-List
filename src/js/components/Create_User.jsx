import { useEffect, useState } from "react";
import { postNewUser } from "./Fetch";

const CreateUser = ({username, setUsername}) => {
    const[newUserResult,setNewUserResult] = useState("")


    const addNewUser = () => {

        postNewUser(username);
        setUsername("")

    } 
    
    const checkTextBox = () => {
        let textBox = document.querySelector(".new-user");
        if (textBox.value === "") {
            alert("Please adda new User.");
        }
            else {
                addNewUser();
             }       
        }
   return(
        <>
        {
            (newUserResult && newUserResult !== "" && newUserResult !== undefined) ? <p className=" text-danger bg-dark"> {newUserResult}</p> : ""
        }
		<input
            type="text"
            className="new-user w-full p-3 border-b outline-none"
            placeholder="Enter new username."
            value={username}
            onChange={event=> setUsername(event.target.value)}
        />
		<button
            className="add-task"
            onClick={checkTextBox}
            >Add new User</button>
        
        </>
    )
};
export default CreateUser;
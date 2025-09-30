import React, { useState } from "react";
import { postNewUser } from "./Fetch";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const addNewUser = () => {
    postNewUser(username);
    setUsername("");
    setIsOpen(false); // close after saving
  };

  const checkTextBox = () => {
    if (username.trim() === "") {
      alert("Please add a new User.");
    } else {
      addNewUser();
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary w-50 justify-content-center"
        onClick={() => setIsOpen(true)}
      >
        Create new user!
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-grey">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-lg w-96 z-10">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
              <h5 className="text-lg font-semibold">Create Username</h5>
            </div>

            {/* Body */}
            <div className="p-4 bg-grey">
              <input
                type="text"
                className="new-user w-full p-3 border rounded outline-none"
                placeholder="Enter new username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
              <button
                className="btn btn-success mt-3"
                onClick={checkTextBox}
              >
                Add new User
              </button>
            </div>

            {/* Footer */}
            <div className="flex justify-end space-x-2 p-4 border-t">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsOpen(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={checkTextBox}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;

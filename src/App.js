import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler = (name, age) => {
    setUserList((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: name,
          age: age,
          key: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;

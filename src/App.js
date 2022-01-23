import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const users = [
    {
      name: "Deb",
      age: "22",
    },
  ];

  return (
    <div>
      <AddUser />
      <UserList users={users} />
    </div>
  );
}

export default App;

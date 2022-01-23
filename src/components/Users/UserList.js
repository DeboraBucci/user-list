import React from "react";
import classes from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(({ name, age }) => (
        <li>
          {name} ({age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UserList;

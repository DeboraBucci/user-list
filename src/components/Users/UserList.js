import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = ({ users }) => {
  return (
    <Card>
      <ul>
        {users.map(({ name, age }) => (
          <li>
            {name} ({age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = ({ users = [] }) => {
  return (
    <Card className={classes.users}>
      <ul>
        {users.map(({ name, age, key }) => (
          <li key={key}>
            {name} ({age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;

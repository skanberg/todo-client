import React from "react";

const TodoItem = ({ id, name, description, completed }) => (
  <div>
    { id } { name } { description } { completed }
  </div>
);

export default  TodoItem;

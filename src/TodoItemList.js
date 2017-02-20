import React from "react";
import { List } from "react-mdl";
import TodoItem from "./TodoItem";

const TodoItemList = ({ todoItems }) => (
  <List>
    { todoItems.map((item) => <TodoItem key={item.id} { ...item } />) }
  </List>
);

export default TodoItemList;

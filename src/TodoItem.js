import React from "react";
import {
  ListItem,
  ListItemContent,
  ListItemAction,
  IconButton
} from "react-mdl";

const TodoItem = ({ id, name, description, completed }) => (
  <ListItem twoLine>
    <ListItemContent avatar="priority_high" subtitle={description}>{ name }</ListItemContent>
    <ListItemAction>
      <IconButton ripple name="delete"/>
      <IconButton ripple name="panorama_fish_eye"/>
      <IconButton colored ripple name="check_circle"/>
    </ListItemAction>
  </ListItem>
);

export default  TodoItem;

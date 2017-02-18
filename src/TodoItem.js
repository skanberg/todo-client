import React from "react";
import { ListItem, ListItemContent, ListItemAction, Icon } from "react-mdl";

const TodoItem = ({ id, name, description, completed }) => (
  <ListItem twoLine>
    <ListItemContent avatar="priority_high" subtitle={description}>{ name }</ListItemContent>
    <ListItemAction>
      <a href="#"><Icon name="star" /></a>
    </ListItemAction>
  </ListItem>
);

export default  TodoItem;

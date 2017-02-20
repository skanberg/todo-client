import React from "react";
import { ListItem, ListItemContent, ListItemAction } from "react-mdl";
import ToggleCompleteButton from "./ToggleCompleteButton";
import DeleteButton from "./DeleteButton";

const TodoItem = ({ id, name, description, completed }) => (
  <ListItem twoLine>
    <ListItemContent subtitle={description}>{ name }</ListItemContent>
    <ListItemAction>
      <DeleteButton id={id} />
      <ToggleCompleteButton id={id} completed={completed} />
    </ListItemAction>
  </ListItem>
);

export default  TodoItem;

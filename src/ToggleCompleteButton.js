import React from "react";
import { IconButton } from "react-mdl";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  mutation toggleComplete($id: String!, $completed: Boolean) {
    updateTodoItem(id: $id, completed: $completed)
  }
`;

const ToggleCompleteButton = ({ id, completed, mutate }) => {
  function onClick() {
    mutate({
      variables: {
        id,
        completed: !completed,
      },
      refetchQueries: ["allTodoItems"],
    });
  }

  return (
    <IconButton
      colored
      ripple
      name={completed ? "check_circle" : "panorama_fish_eye"}
      onClick={onClick}
    />
  );

};

export default graphql(query)(ToggleCompleteButton);

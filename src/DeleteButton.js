import React from "react";
import { IconButton } from "react-mdl";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

const query = gql`
  mutation remove($id: String!) {
    removeTodoItem(id: $id)
  }
`;

const DeleteButton = ({ id, mutate }) => {
  function onClick() {
    mutate({
      variables: {
        id,
      },
      refetchQueries: ["allTodoItems"],
    });
  }

  return (
    <IconButton colored ripple name="delete" onClick={onClick}/>
  );
};

export default graphql(query)(DeleteButton);

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
      updateQueries: {
        allTodoItems: (prev, { mutationResult }) => {
          if (mutationResult.data.removeTodoItem) {
            return {
              allTodoItems: prev.allTodoItems.filter((item) => item.id !== id),
            }
          }
          return prev;
        }
      },
    });
  }

  return (
    <IconButton colored ripple name="delete" onClick={onClick} />
  );
};

export default graphql(query)(DeleteButton);

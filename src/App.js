import React from "react";
import { Layout, Header, Content, Spinner } from "react-mdl";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import AddTodoItem from "./AddTodoItem";
import TodoItemList from "./TodoItemList";
import RefetchButton from "./RefetchButton";

const query = gql`
  query allTodoItems {
    allTodoItems {
      id
      name
      description
      completed
    }
  }
`;

const App = ({ data }) => (
  <Layout fixedHeader>
    <Header title="TODO App">
      <RefetchButton refetch={data.refetch} />
      <AddTodoItem />
    </Header>
    <Content>
      { data.loading ? <Spinner /> : <TodoItemList todoItems={data.allTodoItems} /> }
    </Content>
  </Layout>
);

export default graphql(query)(App);

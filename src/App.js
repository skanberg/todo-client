import React, { Component } from "react";
import { Layout, Header, Content, Spinner, List } from "react-mdl";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import AddTodoItem from "./AddTodoItem";
import TodoItem from "./TodoItem";

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
      <AddTodoItem />
    </Header>
    <Content>
      { data.loading ? <Spinner /> : (
          <List>
            { data.allTodoItems.map((item) => <TodoItem key={item.id} { ...item } />) }
          </List>
        )}
    </Content>
  </Layout>
);

export default graphql(query)(App);

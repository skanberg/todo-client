import React, { Component } from "react";
import { Layout, Header, Content, Spinner, List } from "react-mdl";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

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

class App extends Component {
  render() {
    const { data: { loading, allTodoItems } } = this.props;
    return (
      <Layout fixedHeader>
        <Header title="TODO App"/>
        <Content>
          { loading ? <Spinner /> : (
            <List>
            { allTodoItems.map((item) => <TodoItem key={item.id} { ...item } />) }
            </List>
          )}
        </Content>
      </Layout>
    );
  }
}

export default graphql(query)(App);

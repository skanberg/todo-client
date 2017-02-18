import React, { Component } from "react";
import { Layout, Header, Content, Spinner, List, IconButton } from "react-mdl";
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
    const { data } = this.props;
    return (
      <Layout fixedHeader>
        <Header title="TODO App">
          <IconButton ripple name="add_circle_outline" onClick={() => {}}/>
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
  }
}

export default graphql(query)(App);

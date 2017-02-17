import React, { Component } from "react";
import { Layout, Header, Content, Spinner } from "react-mdl";
import { graphql } from "react-apollo";
import gql from 'graphql-tag';

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
    console.log(this.props.data);
    const { data: { loading, allTodoItems } } = this.props;
    return (
      <Layout fixedHeader>
        <Header title="TODO App"/>
        <Content>
          { loading ? <Spinner /> : (
            <div>
            { allTodoItems.map((item) => <TodoItem key={item.id} { ...item } />) }
            </div>
          )}
        </Content>
      </Layout>
    );
  }
}

export default graphql(query)(App);

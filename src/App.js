import React, { Component } from 'react';
import { Layout, Header, Content } from "react-mdl";
import TodoItem from "./TodoItem";

const todoItems = [{ id: "1", name: "Name 1", description: "desc 1"}];

class App extends Component {
  render() {
    return (
      <Layout fixedHeader>
        <Header title="TODO App"/>
        <Content>
          { todoItems.map((item) => <TodoItem { ...item } />) }
        </Content>
      </Layout>
    );
  }
}

export default App;

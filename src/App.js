import React, { Component } from 'react';
import { Layout, Header } from "react-mdl";

class App extends Component {
  render() {
    return (
      <Layout fixedHeader>
        <Header title="TODO App"/>
      </Layout>
    );
  }
}

export default App;

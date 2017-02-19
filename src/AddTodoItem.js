import React from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "react-mdl";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import InputField from "./InputField";

const query = gql`
  mutation addNewItem($name: String!, $description: String) {
    addTodoItem(name: $name, description: $description) { id }
  }
`;

class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.openDialog = this.openDialog.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.state = {
      dialogOpen: false,
      name: "",
      description: "",
    };
  }

  openDialog() {
    this.setState({
      dialogOpen: true,
    });
  }

  closeDialog() {
    this.setState({
      dialogOpen: false,
      name: "",
      description: "",
    });
  }

  onNameChange(value) {
    this.setState({
      name: value,
    });
  }

  onDescriptionChange(value) {
    this.setState({
      description: value,
    });
  }

  addTodoItem() {
    const { name, description } = this.state;
    this.props.mutate({
      variables: {
        name,
        description,
      },
      refetchQueries: ["allTodoItems"],
    }).then(({ data }) => {
      console.log(data);
    });
    this.closeDialog();
  }

  render() {
    const { dialogOpen, name, description } = this.state;
    return (
      <div>
        <IconButton ripple name="add_circle_outline" onClick={this.openDialog} />
        <Dialog open={dialogOpen}>
          <DialogTitle>Add New</DialogTitle>
          <DialogContent>
            <InputField name="Name" value={name} onChange={(value) => { this.setState({ name: value }); }} />
            <InputField name="Description" value={description} onChange={(value) => { this.setState({ description: value }); }} />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.addTodoItem}>Add</Button>
            <Button onClick={this.closeDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default graphql(query)(AddTodoItem);

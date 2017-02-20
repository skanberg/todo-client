import React from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Snackbar,
} from "react-mdl";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import InputField from "./InputField";

const query = gql`
  mutation addNewItem($name: String!, $description: String) {
    addTodoItem(name: $name, description: $description)
  }
`;

class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.openDialog = this.openDialog.bind(this);
    this.addTodoItem = this.addTodoItem.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.state = {
      dialogOpen: false,
      name: "",
      description: "",
      message: null,
    };
  }

  openDialog() {
    this.setState({
      dialogOpen: true,
    });
  }

  setMessage(message) {
    this.setState({
      message,
    });
  }

  closeDialog() {
    this.setState({
      dialogOpen: false,
      name: "",
      description: "",
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
    }).then(() => {
      this.setMessage("Todo item added.");
    }).catch(() => {
      this.setMessage("Failed to add todo item.")
    });
    this.closeDialog();
  }

  render() {
    const { dialogOpen, name, description, message } = this.state;
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
        <Snackbar active={message !== null} onTimeout={() => { this.setMessage(null); }}>{ message }</Snackbar>
      </div>
    );
  }
}

export default graphql(query)(AddTodoItem);

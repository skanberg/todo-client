import React from "react";
import {
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Textfield,
} from "react-mdl";

class AddTodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.state = {
      dialogOpen: false,
      name: null,
      description: null,
    };
  }

  toggleDialog() {
    this.setState((prevState) => ({
      dialogOpen: !prevState.dialogOpen,
    }));
  }

  render() {
    const { name, description } = this.props;
    return (
      <div>
        <IconButton ripple name="add_circle_outline" onClick={this.toggleDialog} />
        <Dialog open={this.state.dialogOpen}>
          <DialogTitle>Add New</DialogTitle>
          <DialogContent>
            <Textfield
              label="Name"
              floatingLabel
              value={name}
              onChange={(e) => { this.setState({ name: e.target.value }); }}
            />
            <Textfield
              label="Description"
              floatingLabel
              value={description}
              onChange={(e) => { this.setState({ description: e.target.value }); }}
            />
          </DialogContent>
          <DialogActions>
            <Button>Add</Button>
            <Button onClick={this.toggleDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddTodoItem;

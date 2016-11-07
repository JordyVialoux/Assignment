import React from "react";

export default class TodoItem extends React.Component {
  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

  render() {
    const { complete, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"
    
    return (
      <li>
        <span>{this.props.todo.text}</span>
        <span>{icon}</span>
        <button onClick={this.handleDelete.bind(this)}>Remove</button>
      </li>
    );
  }
}

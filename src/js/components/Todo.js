import React from "react";

import * as TodoActions from "../actions/TodoActions";

export default class Todo extends React.Component {
  deleteTodo() {
    TodoActions.deleteTodo();
  }

  render() {
    const { complete, text } = this.props;

    const icon = complete ? "\u2714" : "\u2716"
    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
        <button onClick={this.deleteTodo.bind(this)}>Remove</button>
      </li>
    );
  }
}

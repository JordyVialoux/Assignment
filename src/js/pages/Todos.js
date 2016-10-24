import React from "react";

import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore";


export default class Featured extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodoStore.getAll()
    }
  }
  render() {
    const { todos } = this.state;

    const todoitems = todos.map((todoitem) => {
      return <Todo key={todoitem.id} {...todoitem} />
    });

    return (
      <div className="todolist-wrapper">
        <h1>To do list</h1>
        <ul>
          {todoitems}
        </ul>
      </div>
    );
  }
}

import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";


export default class Featured extends React.Component {
  constructor() {
    super()
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
      value: ""
    }
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
    console.log("count", TodoStore.listenerCount("change"));
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }

  createTodo() {
    let text = this.state.value;
    TodoActions.createTodo(text);
  }

  handleChange(e) {
    let text = e.target.value;
    this.setState({
      value: text
    });
  }

  reloadTodos() {
    TodoActions.reloadTodos();
  }


  render() {
    const { todos } = this.state;

    console.log("todos", todos);

    const todoitems = todos.map((todoitem) => {
      return <Todo key={todoitem.id} {...todoitem} />
    });

    return (
      <div className="todolist-wrapper">
        <h1>To do list</h1>
        <button onClick={this.reloadTodos.bind(this)}>Reload</button>
        <ul>
          {todoitems}
        </ul>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick={this.createTodo.bind(this)}>Create new</button>
      </div>
    );
  }
}

import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: 'Go shopping'
      },
      {
        id: 52342231,
        text: 'Do washing'
      },
    ];
  }


  getAll() {
    return this.todos;
  }

}

const todoStore = new TodoStore;

export default todoStore;

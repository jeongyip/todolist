import React, { Component } from 'react';
import TodoItem from './components/TodoItem';

class TodoList extends Component {
  render() {
    const { todos, onRemove, onCheck } = this.props;

    return (
      <div>
          {
            todos.map(todo => <TodoItem todo={ todo } onRemove={ onRemove } onCheck={ onCheck }/>)
          }
      </div>
    );
  }
}

export default TodoList;

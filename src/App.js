import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';

class App extends Component {

  id = 3;

  state = {
    todos: [
      {
        id: 0,
        name: 'React 공부',
        checked: true,
      },
      {
        id: 1,
        name: '네트워크 공부',
        checked: false,
      },
      {
        id: 2,
        name: '책 읽기',
        checked: false,
      }
    ],
  };

  handleCreatTodo = (text) => {
    const newTodo = {
      id: this.id++,
      name: text,
      checked: false,
    };

    this.setState({
      todos: this.state.todos.concat(newTodo),
    });
  }

  handleRemove = (id) => {
    const nextTodos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos: nextTodos,
    });
  }

  handleCheck = (id) => {
    const nextTodos = this.state.todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          checked: !todo.checked,
        };
      } return todo;
    });

    this.setState({
      todos: nextTodos,
    });
  }

  render() {
    const { todos } = this.state;
    return (
      <div style={{ 'display': 'flex', 'flex-direction': 'column' }}>
        <Header onSubmit={ this.handleCreatTodo } />
        <TodoList todos={ todos } onRemove={ this.handleRemove } onCheck={ this.handleCheck }/>
      </div>
    );
  }
}

export default App;

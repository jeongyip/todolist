import React, { Component } from 'react';


class TodoItem extends Component {
  render() {
    const { todo, onRemove, onCheck } = this.props;

    return (
      <div>
        <div onClick={ () => onCheck(todo.id) }>&#10004;</div>
        { todo.checked && <p>checked!</p> }
        <div>{ todo.name }</div>
        <div onClick={ () => onRemove(todo.id) }>지우기</div>
      </div>
    );
  }
}

export default TodoItem;

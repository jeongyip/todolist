import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    const { todo, onRemove, onCheck } = this.props;

    return (
      <div className="item">
        <div className="check" onClick={ () => onCheck(todo.id) }>&#10004;</div>
        { todo.checked && <p>checked!</p> }
        <div className="name">{ todo.name }</div>
        <div onClick={ () => onRemove(todo.id) }>지우기</div>
      </div>
    );
  }
}

export default TodoItem;

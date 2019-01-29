import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.todo !== this.props.todo;
  }

  render() {
    const { todo, onRemove, onCheck } = this.props;

    return (
      <div className={`item ${todo.checked&&'active'}`}>
        <div className="check" onClick={ () => onCheck(todo.id) }>&#10004;</div>
        <div className="name">{ todo.name }</div>
        <div className="remove" onClick={ () => onRemove(todo.id) }>지우기</div>
      </div>
    );
  }
}

export default TodoItem;

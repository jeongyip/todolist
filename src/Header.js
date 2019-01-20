import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  state = {
    text: '',
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    const { text } = this.state;
    return (
      <form className="container" onSubmit={ this.handleSubmit }>
        <div className="title">TODO LIST</div>
        <div className="bar">
        <input value={ text } onChange={ this.handleChange }/>
        <button type="submit">Add</button>
        </div>
      </form>
    );
  }
}

export default Header;

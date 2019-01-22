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
        <div className="title">/* T O D O   C A R D */</div>
        <div className="bar">
        <input value={ text } onChange={ this.handleChange }/>
        <button type="submit">+</button>
        </div>
      </form>
    );
  }
}

export default Header;

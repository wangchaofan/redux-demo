import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput.jsx';

class Header extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <header>
        <h1>todos</h1>
        <TodoTextInput />
      </header>
    )
  }
}

import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput.jsx';

class Header extends Component {
  constructor(props) {
    super(props)
  }
  handlerSave = (value) => {
    if (value !== '') {
      this.props.addTodo(value);
    }
  }
  render() {
    return (
      <header>
        <h1>todos</h1>
        <TodoTextInput 
          onSave={this.handlerSave} 
          newTodo={true}
          placeholder="What needs to be done?"
        />
      </header>
    )
  }
}

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}
export default Header;

import React from 'react';

class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };
  }
  render() {
    return (
      <input 
        className="new-todo"
        type="text"
        value={this.state.text}
        autoFocus="true"
        placeholder="What needs to be done?"
      />
    );
  };
}

export default TodoTextInput;
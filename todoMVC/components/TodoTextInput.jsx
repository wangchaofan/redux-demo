import React from 'react';

class TodoTextInput extends Component {
  static propTypes = {
    text: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };
  }
  render() {
    <input 
      className="new-todo"
      type="text"
      value={this.state.text}
      autoFocus="true"
      placeholder="What needs to be done"
    />
  };
}

export default TodoTextInput;
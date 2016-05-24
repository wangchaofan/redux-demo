import React, {PropTypes} from 'react';
import classnames from 'classnames';

class TodoTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value || ''
    };
  }
  handlerSubmit = (e) => {
    const value = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(value);
      if (this.props.newTodo) {
        this.setState({value: ''});
      }
    }
  }
  handlerChange = (e) => {
    this.setState({value: e.target.value});
  }
  handlerBlur = (e) => {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }
  render() {
    return (
      <input 
        className={
          classnames({
            edit: this.props.editing,
            'new-todo': this.props.newTodo
          })
        }
        type="text"
        value={this.state.value}
        autoFocus="true"
        placeholder={this.props.placeholder}
        onKeyDown={this.handlerSubmit}
        onChange={this.handlerChange}
        onBlur={this.handlerBlur}
      />
    );
  };
}

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
};

export default TodoTextInput;
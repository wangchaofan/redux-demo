import React, {PropTypes, Component} from 'react';
import classNames from 'classnames';
import TodoTextInput from './TodoTextInput.jsx';

class TodoItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false
		};
	}

	handlerDoubleClick = (e) => {
		this.setState({editing: true});
	}

	handlerSave = (id, value) => {
		if (value === '') {
			this.props.deleteTodo(id);
		} else {
			this.props.editTodo(id, value);
		}
		this.setState({editing: false});
	}

	render() {
		const {todo, completeTodo, deleteTodo} = this.props;

		let elem;

		if (this.state.editing) {
			elem = (
				<TodoTextInput
					value={todo.text}
					editing={this.state.editing}
					onSave={value => this.handlerSave(todo.id, value)}
				/>
			);
		} else {
			elem = (
				<div className="view">
					<input
						className="toggle"
						type="checkbox"
						checked={todo.completed}
						onChange={() => completeTodo(todo.id)}
					/>
					<label onDoubleClick={this.handlerDoubleClick}>{todo.text}</label>
					<button
						className="destroy"
						onClick={() => deleteTodo(todo.id)}
					>
					</button>
				</div>
			);
		}

		return (
			<li
				className={
					classNames({
						completed: todo.completed,
						editing: this.state.editing
				})}>
				{elem}
			</li>
		);
	}
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem;

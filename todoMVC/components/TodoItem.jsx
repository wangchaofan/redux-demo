import React from 'react';
import classNames from 'classnames';
import TodoTextInput from './TodoTextInput.jsx';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false
		};
	}
	
	render() {
		const {todo, completeTodo, deleteTodo} = this.props;
		
		let elem;
		elem = (
				<div className="view">
					<input 
						className="toggle"
						type="checkbox"
						checked={todo.completed}	
					/>
					<label>{todo.text}</label>
					<button className="destroy"></button>
				</div>
			);
		return (
			<li className={classNames({
				completed: todo.completed,
				editing: this.state.edit
			})}>
				{elem}
			</li>
		);
	}
}

export default TodoItem;
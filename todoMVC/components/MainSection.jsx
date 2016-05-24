import React, {PropTypes, Component} from 'react';
import Footer from './Footer.jsx';
import TodoItem from './TodoItem.jsx';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters.js';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: SHOW_ALL
		};
	}
	handlerShow = (filter) => {
		this.setState({filter: filter});
	}
	handleClearCompleted = () => {
		this.props.actions.clearCompleted();
	}
	renderFooter(completedCount) {
		const {todos} = this.props;
		const activeCount = todos.length - completedCount;
		if (todos.length > 0) {
			return (
				<Footer
					activeCount={activeCount}
					completedCount={completedCount}
					filter={this.state.filter}
					onShow={this.handlerShow}
					onClearCompleted={this.handleClearCompleted}
				/>
			);
		}
	}
	render() {
		const {todos, actions} = this.props;
		const {filter} = this.state;
		const completedCount = todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0);
		const filterTodos = todos.filter(TODO_FILTERS[filter]);

		let todoItems = filterTodos.map(todo => {return <TodoItem key={todo.id} todo={todo} {...actions}/>;});

		return (
			<section className="main">
				<input className="toggle-all" type="checkbox"/>
				<ul className="todo-list">
					{todoItems}
				</ul>
				{this.renderFooter(completedCount)}
			</section>
		);
	}
}

MainSection.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default MainSection;

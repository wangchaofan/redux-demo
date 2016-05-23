import React from 'react';
import Footer from './Footer.jsx';
import TodoItem from './TodoItem.jsx';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters.js';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

class MainSection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			filter: SHOW_ALL
		};
	}
	render() {
		let todoItems = [];
		this.props.data.todos.forEach(value => {
			todoItems.push(<TodoItem todo={value}/>);
		});
		return (
			<section className="main">
				<input className="toggle-all" type="checkbox"/>
				<ul className="todo-list">
					{todoItems}
				</ul>
				<Footer />
			</section>
		);
	}
}

export default MainSection;
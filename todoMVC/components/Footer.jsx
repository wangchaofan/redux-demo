import React from 'react';
import classnames from 'classnames';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters.js';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  renderClearButton = () => {
    const {completedCount, onClearCompleted} = this.props;
    if (completedCount > 0) {
      return (
        <button
          className = "clear-completed"
          onClick={onClearCompleted}
        >
          Clear completed
        </button>
      )
    }
  }
  render() {
    const {activeCount, filter, onShow} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeCount}</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/" 
              className={classnames({selected: filter === SHOW_ALL})}
              onClick={() => onShow(SHOW_ALL)}
            >All</a>
          </li>
          <span> </span>
          <li>
            <a href="#/active" 
              className={classnames({selected: filter === SHOW_ACTIVE})}
              onClick={() => onShow(SHOW_ACTIVE)}
            >active</a>
          </li>
          <span> </span>
          <li>
            <a href="#/completed" 
              className={classnames({selected: filter === SHOW_COMPLETED})}
              onClick={() => onShow(SHOW_COMPLETED)}
            >Completed</a>
          </li>
        </ul>
        {this.renderClearButton()}
      </footer>
    );
  }
}

export default Footer;
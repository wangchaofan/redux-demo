import React from 'react';
import classNames from 'classnames';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>1</strong>
          <span> </span>
          <span>item</span>
          <span> left</span>
        </span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <span> </span>
          <li>
            <a href="#/active">active</a>
          </li>
          <span> </span>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
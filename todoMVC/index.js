// import React from 'react';
// import ReactDom from 'react-dom';
// import Header from './components/Header.jsx';
// import MainSection from './components/MainSection.jsx';
// import './style.css';

var initialState = [
	{
		id: 0,
		text: '123',
		completed: false
	}, {
		id: 1,
		text: 'my thing',
		completed: true
	}, {
		id: 2,
		text: 'do fishing',
		completed: false
	}
];

// ReactDom.render(
// 	<div>
// 		<Header
// 			addTodo={text => console.log('add todo', text)}
// 		/>
// 		<MainSection
// 			todos={todos}
// 			completeTodo={id => console.log('completeTodo ' + id)}
// 			deleteTodo={id => console.log('deleteTodo ' + id)}
// 			editTodo={(id, text) => console.log('editTodo ' + 'id=' + id + ' text=' + text)}
// 		/>
// 	</div>,
// 	document.getElementById('root')
// );
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import configureStore from './store/configureStore.js';
import './style.css';

const store = configureStore({todos: initialState});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

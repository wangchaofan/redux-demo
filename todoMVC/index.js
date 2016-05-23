import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';
import MainSection from './components/MainSection.jsx';
import './style.css';

var data = {
	filter: 'SHOW_ALL'
}
var todoItems = [
	{
		text: '123',
		completed: false
	}, {
		text: 'my thing',
		completed: true
	}, {
		text: 'do fishing',
		completed: false
	}
];
data.todos = todoItems;

ReactDom.render(
	<div>
		<Header />
		<MainSection data={data}/>
	</div>,
	document.getElementById('root')
);
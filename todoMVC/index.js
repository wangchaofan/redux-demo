import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';
import './style.css';

ReactDom.render(
	<div>
		<Header />
	</div>,
	document.getElementById('root')
);
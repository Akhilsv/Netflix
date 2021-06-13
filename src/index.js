import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FetchProvider from './FetchContext'

ReactDOM.render(
	<FetchProvider>
		<App />
	</FetchProvider>,
	document.getElementById('root'),
);

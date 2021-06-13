import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FetchProvider from './FetchContext'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<FetchProvider>
			<App />
		</FetchProvider>
	</BrowserRouter>,
	document.getElementById('root'),
);

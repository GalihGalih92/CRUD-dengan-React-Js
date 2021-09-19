import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Variabel from './react-dasar/variabel';
import StateProps from './react-dasar/state_props';
import Map from './react-dasar/map'
import LS from './react-dasar/lifecycle'
import 'bootstrap/dist/css/bootstrap.min.css';
import CRUD from './crud/index';

ReactDOM.render(
	<React.StrictMode>
	<CRUD/>
	</React.StrictMode>,
	document.getElementById('root')
	);

	// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

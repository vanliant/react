import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import './cookies/index'
import { saveCookie, fetchCookie, removeCookie } from './cookies/index';
// import './mock/mock'

// cookies 挂载到全局
React.$cookies = {
	saveCookie,
	fetchCookie,
	removeCookie
}

ReactDOM.render(

	<Provider store={store}>
		<Router>
			{/* <React.StrictMode> */}
			<App />
			{/* </React.StrictMode> */}
		</Router>
	</Provider>,
	document.getElementById('root')
);
reportWebVitals();

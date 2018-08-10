import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './style/index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
)
registerServiceWorker();

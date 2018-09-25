import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import postReducer from './PostReducer';

const store = createStore(postReducer);
console.log(store);
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
	  <App/> 
	</Provider>,
	document.getElementById('root'));

//https://codeburst.io/redux-a-crud-example-abb834d763c9
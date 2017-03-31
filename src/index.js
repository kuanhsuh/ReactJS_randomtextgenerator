import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

//import redux
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';


const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

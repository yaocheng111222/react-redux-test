import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

const App1 = (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDOM.render(
  App1,
  document.getElementById('root')
);

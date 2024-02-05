import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';

const root = document.getElementById('main');

if (!root) {
  throw new Error("No root element found");
}

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
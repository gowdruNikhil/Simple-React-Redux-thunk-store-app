import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import AppStore from './redux/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={AppStore}>
    <App />
  </Provider>
);

reportWebVitals();

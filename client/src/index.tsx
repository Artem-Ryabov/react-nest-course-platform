import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import axios, { HeadersDefaults } from 'axios';

import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

axios.defaults.baseURL = 'http://localhost:4000';

axios.defaults.headers = {
  ...axios.defaults.headers,
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
} as HeadersDefaults;

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

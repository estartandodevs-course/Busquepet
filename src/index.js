import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button} from './components/button/Button';
import {Select} from './components/select/Select';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Select type="estado"/>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

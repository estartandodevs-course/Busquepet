import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Button} from './components/button/Button';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Button></Button>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

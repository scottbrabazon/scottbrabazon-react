import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from './components/Context';
import App from './components/App';
import './style.css';
import './img/background-wide-wallpaper-1920x1080-005.jpg';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);

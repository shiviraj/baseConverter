import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BaseConverter from './components/BaseConverter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BaseConverter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

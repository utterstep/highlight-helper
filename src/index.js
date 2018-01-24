import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import App from './components/app/app.js';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

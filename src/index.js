import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();

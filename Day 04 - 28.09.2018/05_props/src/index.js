import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM
.render(
    <App title="Best Pizza in the world" msg="Welcome" />,
    document.getElementById('root'));
   
registerServiceWorker();

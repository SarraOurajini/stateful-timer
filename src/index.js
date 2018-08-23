import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const A = () => { return ( 
    <div>
    <App ms={6625000}/>
    </div>
)
}

ReactDOM.render(<A />, document.getElementById('root'));
registerServiceWorker();

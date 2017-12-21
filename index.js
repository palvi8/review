import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var root = document.createElement("div");
root.id="levler-root";
document.getElementsByTagName('body')[0].appendChild(root);
ReactDOM.render(<App />, document.getElementById('levler-root'));


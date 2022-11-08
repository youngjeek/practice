import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import appFirebase from './firebase';
console.log(appFirebase);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

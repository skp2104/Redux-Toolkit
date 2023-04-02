import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store'; //step-2: import store
import { Provider } from 'react-redux'; //step-3: import "Provider"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //step-4: wrap the App component with the "Provider" and pass the "store" as prop called "store"
  <Provider store={store}>
    <App />
  </Provider>
);

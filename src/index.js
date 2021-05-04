import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
//import getAppStore from './store/store';
import store from './store/store'
import { Provider } from 'react-redux';


/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

//const store = getAppStore();

const template = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(template, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

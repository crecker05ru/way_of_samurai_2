import reportWebVitals from './reportWebVitals';
//import state, { subscribe } from './components/redux/state'
import store from './components/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//import {Provider} from './StoreComponent';



// let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App  />
        </Provider>
    </BrowserRouter>
,
      document.getElementById('root')
    );
  // }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// rerenderEntireTree(store.getState());

// store.subscribe (()=>{
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

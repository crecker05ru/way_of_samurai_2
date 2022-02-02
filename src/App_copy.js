import reportWebVitals from './reportWebVitals';
//import state, { subscribe } from './components/redux/state'
import store from './components/redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';

//import {Provider} from './StoreComponent';


let AppContainer = compose (
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

  const App = (props) => {
    return <BrowserRouter basename={process.env.PUBLIC_URL} >
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  }

  export default App;
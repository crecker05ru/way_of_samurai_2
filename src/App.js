import { Component } from 'react';
import { connect, Provider } from 'react-redux';
import {  Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
//import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News.jsx';
//import ProfileContainer from './components/Profile/ProfileContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {initializeApp} from './components/redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader';
import store from './components/redux/redux-store';
import React from 'react';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
class App extends Component {
  componentDidMount(){
    this.props.initializeApp();
 }
 
  render () {
    if (!this.props.initialized){
    return <Preloader />
  }
  return (

          <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className='app-wrapper-content'>
                <Route path='/login' render={ () => <LoginPage  /> } />
                <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
                <Route path='/dialogs'
                 render={ () => {
                  return <React.Suspense fallback={<div>Loading...</div>}>
                 <DialogsContainer  />
                 </React.Suspense>
                } } />
                <Route path='/users' render={ () => <UsersContainer /> } />
                <Route path='/news' render={ () => <News /> } />
                <Route path='/music' render={ () => <Music /> } />
                <Route path='/settings' render={ () => <Settings /> } />
                
                </div>
            </div>

  )
  }
}


// export default App;


const mapStateToProps = (state) =>({
  initialized: state.app.initialized
})

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);


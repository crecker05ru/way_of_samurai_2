import React from 'react';
//import avatar from './../../images/avatar.png';
//import style from './Dialogs.module.css';
import {sendMessageCreator} from '../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import StoreContext from '../../StoreComponent';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import ProfileContainer from '../Profile/ProfileContainer';
import { compose } from 'redux';

let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage

    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        sendMessage : (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }

    }
}




export default compose (
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
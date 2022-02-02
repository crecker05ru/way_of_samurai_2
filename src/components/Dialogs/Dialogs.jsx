import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import avatar from './../../images/avatar.png';
import style from './Dialogs.module.css';
import {sendMessageCreator,updateNewMessageBodyCreator} from '../../components/redux/dialogs-reducer'
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../util/validators/validators';


const DialogItem = (props) =>{
    return (
        <div className={style.dialogs + " " + style.active}>
        <img src={avatar} />
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
       </div>
    )
}

const Message = (props) =>{



    return (
        <div className={style.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) =>{

    let state = props.dialogsPage;

    let newMessageElement = React.createRef();

    let addMessage = () =>{
        let text = newMessageElement.current.value;
        alert(text);
    }

    let dialogsElements = state.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} /> );
    let messagesElements = state.messagesData.map(message => <Message message={message.message} id={message.id} key={message.id} /> );
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} /> ;
    return (
        <div className={style.dialogs}>
           <div className ={style.dialogsItems}>
                {dialogsElements}
           </div>
           <div className ={style.messages}>
           {messagesElements}
                
           </div>
           <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
};

const maxLengthCreator50 = maxLengthCreator(50)
const AddMessageForm =(props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
        <div> 
            <Field component={Textarea} 
            name='newMessageBody' 
            placeholder='Enter your message'
            validate={[required,maxLengthCreator50]}
            />
        </div>
        <div><button >Send</button></div>
   </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogsAddMessageForm'})(AddMessageForm);

export default Dialogs;
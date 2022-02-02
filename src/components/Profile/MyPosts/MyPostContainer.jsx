import style from './MyPosts.module.css';
import Post from './Post/Post'
import React from 'react';
import {addPostActionCreator} from '../../redux/profile-reducer'
import MyPosts from './MyPosts';
//import StoreContext from '../../../StoreComponent';
import { connect } from 'react-redux';

// const MyPostsContainer = () => {
//   // let state = props.store.getState();
//     return  (
//       <StoreContext.Consumer>
//         {
//         (store) => {
//           let state = store.getState();
//           let addPost = () => {
//             store.dispatch(addPostActionCreator());
//           }
        
//           let onPostChange = (text) =>{
//             let action = updateNewPostTextActionCreator(text);
//             store.dispatch(action);
//           }

//         return <MyPosts  updateNewPostText={onPostChange} 
//           addPost={addPost} 
//           postData={state.profilePage.postData}
//           newPostText={state.profilePage.newPostText}/>
//           }
//         }   
//          </StoreContext.Consumer>
//     )
// } ;

let mapStateToProps = (state) =>{
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
      addPost: (newPostText) => {
        dispatch(addPostActionCreator(newPostText));
      }

  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts);


export default MyPostsContainer;
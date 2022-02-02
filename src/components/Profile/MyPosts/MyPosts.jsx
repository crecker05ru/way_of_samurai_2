import style from './MyPosts.module.css';
import Post from './Post/Post'
import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from './../../redux/profile-reducer'
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../util/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

  let postsElements = props.postData
  .map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    //alert(values + 'buttonclick')
    props.addPost(values.newPostText);
  }


    return  (
    <div>
      <h3>My posts</h3>
      <MyNewPostFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
    )
} ;

const MyNewPostForm = (props) =>{
  return (<form onSubmit={props.handleSubmit}>
        <div>
        <Field  name='newPostText' 
        component={Textarea}
        placeholder={""}
        validate={[required, maxLength10]}
        />
        <div>
          <button>Add</button>
        </div>
      </div>
      <div className={style.posts}>
      </div>
  </form>
  )
}

let MyNewPostFormRedux = reduxForm({form:'ProfileMyNewPostForm'})(MyNewPostForm)

export default MyPosts;
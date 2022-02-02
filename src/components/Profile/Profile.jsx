//import motorstorm from './../../images/motorstorm.jpeg';
//import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostContainer';
//import style from './Profile.module.css';
import ProfileInfo from'./ProfileInfo/ProfileInfo';
const Profile = (props) => {

    return (
  <div >
      <ProfileInfo 
      savePhoto={props.savePhoto}
      isOwner={props.isOwner}
      profile={props.profile}  
      status={props.status} 
      updateStatus={props.updateStatus}
      saveProfile={props.saveProfile}
      />
      <MyPostsContainer  />
  </div>
  )
} ;

export default Profile;
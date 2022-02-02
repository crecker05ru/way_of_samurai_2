import style from './Post.module.css';
import avatar from './../../../../images/avatar.png';
const Post = (props) => {
    return  (
        <div className={style.item}>
          <img src={avatar} />
          {props.message}
          <div>
            <span>Like {props.likesCount} </span>
          </div>
        </div>
    )
} ;

export default Post;
//console.log(Post());
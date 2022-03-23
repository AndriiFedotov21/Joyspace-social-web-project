import classes from './My_posts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
            <div className={classes.my_posts}>
                <h4>My posts</h4>
                <div>
                    <textarea></textarea>
                    <button>Add</button>
                    <button>Remove</button>
                </div>
                <div className={classes.posts}>
                    <Post message='hello , how are you?' likesCount='1'/>
                    <Post message='hello, it`s my first post' likesCount='6'/>
                </div>
            </div>

    )
}

export default MyPosts
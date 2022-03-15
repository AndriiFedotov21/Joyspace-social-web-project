import classes from './My_posts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (
            <div classname={classes.my_posts}>
                <div>
                    <textarea></textarea>
                    <button>Add</button>
                    <button>Remove</button>
                </div>
                <Post/>
            </div>

    )
}

export default MyPosts
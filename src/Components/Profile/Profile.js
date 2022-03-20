import classes from './Profile.module.css'
import MyPosts from "./My_posts/My_posts";

const Profile = (props) => {
    return (
        <div>
            <div>
                <img className={classes.main_img} src='https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400'></img>
            </div>
            <div>
                <img className={classes.secondary_img} src='https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg'></img>
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile
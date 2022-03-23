import classes from './Profile.module.css'
import MyPosts from "./My_posts/My_posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile
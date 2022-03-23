import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={classes.main_img} src='https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400'></img>
            </div>
            <div className={classes.description_block}>
                <img className={classes.secondary_img} src='https://www.gettyimages.com/gi-resources/images/500px/983703508.jpg'></img>
                description
            </div>

        </div>
    )
}

export default ProfileInfo
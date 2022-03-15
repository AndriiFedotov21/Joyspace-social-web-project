import classes from "./Post.module.css";

const Post = () => {
    return (
        <div>
            <div className={classes.item}>
                <img src='https://imageio.forbes.com/specials-images/imageserve/5faad4255239c9448d6c7bcd/Best-Animal-Photos-Contest--Close-Up-Of-baby-monkey/960x0.jpg?fit=bounds&format=jpg&width=960'></img>
                post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>

    )
}

export default Post
import s from "./MyPosts.module.css";
import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div><textarea></textarea>
                <button>Add post</button>
            </div>
            <div>New post</div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likeCount={2}/>
                <Post message={"It's my first post"} likeCount={10}/>
            </div>
        </div>
    )
}

export default MyPosts;
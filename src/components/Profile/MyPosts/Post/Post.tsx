import s from "./Post.module.css";
import React from "react";

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://www.centax.ru/images/movies/mandalorian/persons/grogu-320.jpg" alt="profile picture"/>
            Post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;
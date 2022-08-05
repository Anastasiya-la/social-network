import s from "./Post.module.css";
import React from "react";

export type PostType = {
    id: number
    message: string
    likeCount: number
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src="https://www.centax.ru/images/movies/mandalorian/persons/grogu-320.jpg" alt="profile picture"/>
            {props.message}
            <div>
                <span>{props.likeCount} like</span>
            </div>
        </div>
    )
}

export default Post;
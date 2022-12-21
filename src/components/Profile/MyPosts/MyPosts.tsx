import s from "./MyPosts.module.css";
import React from "react";
import Post, {PostType} from "./Post/Post";
import {ActionsTypes} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            props.dispatch({type: 'ADD-POST'});
        }

    }

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            let action: ActionsTypes = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
            props.dispatch(action);
        }


    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>New post</div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
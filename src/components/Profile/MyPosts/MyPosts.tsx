import s from "./MyPosts.module.css";
import React from "react";
import Post, {PostType} from "./Post/Post";

type MyPostsPropsType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (text: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        props.addPost();

    }

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>);
    let onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text);
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
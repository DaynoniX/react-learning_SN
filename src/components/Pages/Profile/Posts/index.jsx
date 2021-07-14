import React from "react";
import Post from "./Post";

import styles from './Posts.module.scss';

const Posts = (props) => {
    let postsElements = props.posts.map(post => <Post text={post.text} name={post.name}/>)
    return (
        <div className={styles.posts}>
            { postsElements }
        </div>
    )
}

export default Posts;

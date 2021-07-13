import React from "react";
import Post from "./Post";

import styles from './Posts.module.scss';

const Posts = () => {
    return (
        <div className={styles.posts}>
            <Post text={'its a first post'}/>
            <Post text={'its a second post'}/>
            <Post text={'its a third post'}/>
        </div>
    )
}

export default Posts;

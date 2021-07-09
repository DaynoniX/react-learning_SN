import React from "react";
import styles from './Post.module.scss';
import  '../../../../../styles/global.scss';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}>
                <img src="avtar.png" alt=""/>
            </div>
            <div className={styles.content}>
                <div className={styles.name}>
                    Name
                </div>
                <div className={styles.text}>
                    <p>{props.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;

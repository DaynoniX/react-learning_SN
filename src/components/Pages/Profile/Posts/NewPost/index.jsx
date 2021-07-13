import React from "react";
import styles from './NewPost.module.scss';
import  '../../../../../styles/global.scss';
import Button from "../../../../UI/Button";

const NewPost = (props) => {
    return (
        <div className={styles.newPost}>
            <h5>My posts</h5>
            <form action="#">
                <textarea placeholder={'Start typing...'}></textarea>
                <Button type={styles.btnDefault} text={'Send'}/>
            </form>
        </div>
    );
}

export default NewPost;

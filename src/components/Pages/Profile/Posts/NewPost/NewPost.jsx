import React from "react";

import Button from "../../../../UI/Button";

import styles from './NewPost.module.scss';
import '../../../../../styles/global.scss';

const NewPost = (props) => {

    let textareaRef = React.createRef();
    let onAddPost = () => {
        let textareaText = textareaRef.current.value;
        textareaText !== '' ?
            props.addPost() : alert('Please, fill text area before saving post!');
    }
    let onTypePost = () => {
        let textareaText = textareaRef.current.value;
        props.typePost(textareaText);
    }
    return (
        <div className={styles.newPost}>
            <h5>My posts</h5>
            <form action="#">
                <textarea placeholder={'Start typing...'} ref={textareaRef} value={props.postText}
                          onChange={onTypePost}/>
                <Button type={styles.btnDefault} text={'Add post'} onClick={onAddPost}/>
            </form>
        </div>
    );
}

export default NewPost;

import React from "react";

import Button from "../../../../UI/Button";

import styles from './NewPost.module.scss';
import '../../../../../styles/global.scss';
import {addPostAction, typePostAction} from "../../../../../tmp_state/state";

const NewPost = (props) => {

    let textareaRef = React.createRef();
    let addPost = () => {
        let textareaText = textareaRef.current.value;
        textareaText !== '' ?
            props.dispatch(addPostAction()) : alert('Please, fill text area before saving post!');
    }
    let typePost = () => {
        let textareaText = textareaRef.current.value;
        props.dispatch(typePostAction(textareaText));
    }

    return (
        <div className={styles.newPost}>
            <h5>My posts</h5>
            <form action="#">
                <textarea placeholder={'Start typing...'} ref={textareaRef} value={props.state}
                          onChange={typePost}/>
                <Button type={styles.btnDefault} text={'Add post'} onClick={addPost}/>
            </form>
        </div>
    );
}

export default NewPost;

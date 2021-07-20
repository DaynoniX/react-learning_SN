import React from "react";

import Button from "../../../../UI/Button";

import styles from './NewPost.module.scss';
import  '../../../../../styles/global.scss';

const NewPost = (props) => {

    let textareaRef = React.createRef();
    let addPost = () =>{
        let textareaText = textareaRef.current.value;
        textareaText !== '' ? props.addPost(textareaText) : alert('Please, fill text area before saving post!');
    }
    let typePost = () => {
        let textareaText = textareaRef.current.value;
        props.typeText(textareaText);
    }

    return (
        <div className={styles.newPost}>
            <h5>My posts</h5>
            <form action="#">
                <textarea placeholder={'Start typing...'} ref={textareaRef} value={props.state.newPost} onChange={typePost}/>
                <Button type={styles.btnDefault} text={'Add post'} onClick={addPost}/>
            </form>
        </div>
    );
}

export default NewPost;

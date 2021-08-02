import React from "react";

import {
    addPostAction,
    typePostAction
} from "../../../../../redux/profileReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostAction());
    }
    let typePost = (text) => {
        props.store.dispatch(typePostAction(text));
    }

    return (
        <NewPost
            typePost={typePost}
            addPost={addPost}
            postText={props.store.getState().profilePage.newPost}
        />
    );
}

export default NewPostContainer;

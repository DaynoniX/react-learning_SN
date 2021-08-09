import React from "react";

import {
    addPostAction,
    typePostAction
} from "../../../../../redux/profileReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

// const NewPostContainer = (props) => {
//
//     let addPost = () => {
//         props.store.dispatch(addPostAction());
//     }
//     let typePost = (text) => {
//         props.store.dispatch(typePostAction(text));
//     }
//
//     return (
//         <NewPost
//             typePost={typePost}
//             addPost={addPost}
//             postText={props.store.getState().profilePage.newPost}
//         />
//     );
// }
let mapStateToProps = (state) =>{
    return{
        postText: state.profilePage.newPost
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        typePost: (text) => dispatch(typePostAction(text)),
        addPost: () => dispatch(addPostAction())
    }
}
let NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer;

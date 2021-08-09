import React from 'react';

import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import Posts from "./Posts";
import Info from "./Info";

import styles from './Profile.module.scss';
import {connect} from "react-redux";

let infoState = (state) =>{
    return{
        data: state.profilePage.infoData
    }
}
let InfoProvider = connect(infoState, null)(Info);

let postsState = (state) => {
    return{
        posts: state.profilePage.posts
    }
}
let PostsProvider = connect(postsState, null)(Posts);

const Profile = (props) => {

    return (
        <div>
            <div className={styles.wallpaper} />
            <InfoProvider/>
            <NewPostContainer />
            <PostsProvider />
        </div>
    );
}
 export default Profile;

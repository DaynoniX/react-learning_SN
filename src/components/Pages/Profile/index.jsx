import React from 'react';

import NewPostContainer from "./Posts/NewPost/NewPostContainer";
import Posts from "./Posts";
import Info from "./Info";

import styles from './Profile.module.scss';

const Profile = (props) => {

    return (
        <div>
            <div className={styles.wallpaper} />
            <Info data={props.store.getState().profilePage.infoData}/>
            <NewPostContainer store={props.store}/>
            <Posts posts={props.store.getState().profilePage.posts}/>
        </div>
    );
}
 export default Profile;

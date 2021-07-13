import React from 'react';
import NewPost from "./Posts/NewPost";
import Posts from "./Posts";
import Info from "./Info";

import styles from './Profile.module.scss';

const Profile = () => {
    return (
        <div>
            <div className={styles.wallpaper} />
            <Info />
            <NewPost/>
            <Posts />
        </div>
    );
}
 export default Profile;

import React from 'react';
import NewPost from "./Posts/NewPost";
import Posts from "./Posts";
import Info from "./Info";

import styles from './Profile.module.scss';

const Profile = (props) => {

    return (
        <div>
            <div className={styles.wallpaper} />
            <Info data={props.state.infoData}/>
            <NewPost/>
            <Posts posts={props.state.posts}/>
        </div>
    );
}
 export default Profile;

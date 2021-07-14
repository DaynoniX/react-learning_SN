import React from 'react';
import NewPost from "./Posts/NewPost";
import Posts from "./Posts";
import Info from "./Info";

import styles from './Profile.module.scss';

const Profile = () => {

    let infoData =
        {
            name: 'John Doe',
            birthday_date: '20.10.1990',
            city: 'Some City',
            educ: 'Education Info',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at commodi dignissimos eum fuga fugiat, nam quibusdam! Amet assumenda at ducimus ex iure molestias omnis optio tempore. Asperiores, tenetur?'
        }

    let posts = [
        {
            name: 'Name 1',
            text: 'Text 1'
        },
        {
            name: 'Name 2',
            text: 'Text 2'
        },
        {
            name: 'Name 3',
            text: 'Text 3'
        },
    ]


    return (
        <div>
            <div className={styles.wallpaper} />
            <Info data={infoData}/>
            <NewPost/>
            <Posts posts={posts}/>
        </div>
    );
}
 export default Profile;

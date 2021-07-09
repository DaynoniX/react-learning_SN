import React from 'react';
import Post from "./Posts/Post";
import Button from "../../UI/Button";
import styles from './Profile.module.scss';
import '../../../styles/global.scss';

const Profile = () => {
    const renderInfo = () => (
        <div className={styles.info}>
            <div className={styles.avatar}>
                <img src="avtar.png" alt=""/>
            </div>
            <div className={styles.description}>
                <h4>John Doe</h4>
                <p><strong>Birthday date:</strong> 20.10.1990</p>
                <p><strong>City:</strong> Lazytown</p>
                <p><strong>Education:</strong> Highest in universe</p>
                <p><strong>Info:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at commodi dignissimos eum fuga fugiat, nam quibusdam! Amet assumenda at ducimus ex iure molestias omnis optio tempore. Asperiores, tenetur?</p>
            </div>
        </div>
    );

    return (
        <div className={`${styles.container} ${'bar'}`}>
            <div className={styles.wallpaper} />
            {renderInfo()}
            <div className={styles.newPost}>
                <h5>My posts</h5>
                <form action="#">
                    <textarea placeholder={'Start typing...'}></textarea>
                    <Button type={styles.btnDefault} text={'Send'}/>
                </form>
            </div>
            <div className={styles.posts}>
                <Post text={'its a first post'}/>
                <Post text={'its a second post'}/>
                <Post text={'its a third post'}/>
            </div>
        </div>
    );
}
 export default Profile;

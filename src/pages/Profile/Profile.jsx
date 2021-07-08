import React from 'react';
import styles from './Profile.module.scss';
import '../../styles/global.scss';

const Profile = () => {
    return (
        <div className={`${styles.container} ${'bar'}`}>
            <div className={styles.wallpaper}>

            </div>
            <div className={styles.info}>
                <div className={styles.avatar}>
                    <img src="avtar.png" alt=""/>
                </div>
                <div className={styles.description}>
                    <h4>John Doe</h4>
                    <p><b>Birthday date:</b> 20.10.1990</p>
                    <p><b>City:</b> Lazytown</p>
                    <p><b>Education:</b> Highest in universe</p>
                    <p><b>Info:</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam at commodi dignissimos eum fuga fugiat, nam quibusdam! Amet assumenda at ducimus ex iure molestias omnis optio tempore. Asperiores, tenetur?</p>
                </div>
            </div>
            <div className={styles.newPost}>
                <h5>My posts</h5>
                <form action="#">
                    <textarea placeholder={'Start typing...'}></textarea>
                    <button className={`${styles.btnDefault} ${`btnDefault`}`}>Submit</button>
                </form>
            </div>
            <div className="posts">

            </div>
        </div>
    );
}
 export default Profile;

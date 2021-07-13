import React from "react";
import styles from './Info.module.scss';

const Info = () => {
    return (
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
    )
};

export default Info;

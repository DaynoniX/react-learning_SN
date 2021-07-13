import React from "react";

import styles from './Message.module.scss';

const Message = (props) =>{
    // console.log(styles[props.from]);
    return (
        <div className={`${styles.message}`}>
            <div className={styles.avatar}>
                <img src="avtar.png" alt="avatar"/>
            </div>
            <div className={styles.content}>{props.text}</div>
        </div>
    )
}

export default Message;

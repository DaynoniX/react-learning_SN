import React from "react";

import styles from './Message.module.scss';

const Message = (props) =>{
    let messageClass = '';
    if (props.state.type > 0){
        messageClass = styles.message + ' ' + styles.income;
    } else {
        messageClass = styles.message;
    }

    return (
        <div className={messageClass}>
            <div className={styles.avatar}>
                <img src={props.state.img} alt="avatar"/>
            </div>
            <div className={styles.content}>{props.state.text}</div>
        </div>
    )
}

export default Message;

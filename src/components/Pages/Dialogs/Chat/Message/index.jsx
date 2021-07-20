import React from "react";
import classnames from 'classnames/bind';
import styles from './Message.module.scss';

const Message = (props) => {
    let classes = classnames.bind(styles);
    let messageClass = classes(
        'message',
        {'income': props.state.type}
    );

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

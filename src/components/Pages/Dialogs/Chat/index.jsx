import React from "react";
import Message from "./Message";

import styles from "./Chat.module.scss";


const Chat = (props) => {
    let messagesList = props.state.map( item => <Message state={item} />);

        return (
            <div className={styles.chat}>
                { messagesList }
            </div>
        )
}
export default Chat;

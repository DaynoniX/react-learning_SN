import React from "react";
import Message from "./Message";

import styles from "./Chat.module.scss";
import Button from "../../../UI/Button";
import {
    addMessageAction,
    typeMessageAction
} from "../../../../redux/dialogsReducer";


const Chat = (props) => {
    let messageInput = React.createRef();
    let messagesList = props.messagesList.map( item => <Message state={item} />);

    let typeMessage = () =>{
        let text = messageInput.current.value;
        props.onTypeMessage(text);
    }
    let addMessage = () =>{
        props.onAddMessage();
        messageInput.current.focus();
    }
        return (
            <div className={styles.chat}>
                <div className={styles.messages}>
                    { messagesList }
                </div>
                <div className={styles.input}>
                    <input type="text" ref={messageInput} onChange={typeMessage} value={props.textareaValue}/>
                    <Button text="Send" onClick={addMessage}/>
                </div>
            </div>
        )
}
export default Chat;

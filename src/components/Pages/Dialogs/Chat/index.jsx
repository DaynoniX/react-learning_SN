import React from "react";
import Message from "./Message";

import styles from "./Chat.module.scss";
import Button from "../../../UI/Button";
import {addMessageAction, typeMessageAction} from "../../../../tmp_state/dialogsReducer";


const Chat = (props) => {
    let messageInput = React.createRef();
    let messagesList = props.state.messages.map( item => <Message state={item} />);

    let typeMessage = () =>{
        let text = messageInput.current.value;
        props.dispatch(typeMessageAction(text))
    }
    let addMessage = () =>{
        props.dispatch(addMessageAction())
    }
        return (
            <div className={styles.chat}>
                <div className={styles.messages}>
                    { messagesList }
                </div>
                <div className={styles.input}>
                    <input type="text" ref={messageInput} onChange={typeMessage} value={props.state.newMessage}/>
                    <Button text="Send" onClick={addMessage}/>
                </div>
            </div>
        )
}
export default Chat;

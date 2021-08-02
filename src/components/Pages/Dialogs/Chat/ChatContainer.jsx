import React from "react";
import Message from "./Message";

import {
    addMessageAction,
    typeMessageAction
} from "../../../../redux/dialogsReducer";
import Chat from "./Chat";


const ChatContainer = (props) => {

    let typeMessage = (text) => {
        props.store.dispatch(typeMessageAction(text))
    }
    let addMessage = () => {
        props.store.dispatch(addMessageAction())
    }
    return (
        <Chat
            onTypeMessage={typeMessage}
            onAddMessage={addMessage}
            messagesList={props.store.getState().dialogsPage.messages}
            textareaValue={props.store.getState().dialogsPage.newMessage}
        />
    )
}
export default ChatContainer;

import React from "react";

import {
    addMessageAction,
    typeMessageAction
} from "../../../../redux/dialogsReducer";
import Chat from "./Chat";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        messages: state.dialogsPage.messages,
        textareaValue: state.dialogsPage.newMessage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        typeMessage : (text) => {
            dispatch(typeMessageAction(text))
        },
        addMessage : () => {
            dispatch(addMessageAction())
        }
    }
}
const ChatContainer = connect(mapStateToProps,mapDispatchToProps)(Chat);
export default ChatContainer;

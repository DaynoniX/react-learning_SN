import React from 'react';

import Chat from "./Chat/Chat";
import List from "./List";

import styles from './Dialogs.module.scss';
import ChatContainer from "./Chat/ChatContainer";

const Dialogs = (props) =>{
    return(
        <div className={styles.dialogs}>
            <List
                state={props.store.getState().dialogsPage.dialogsList}/>
            <ChatContainer
                store={props.store}/>
        </div>
    )
}
export default Dialogs;

import React from 'react';

import Chat from "./Chat";
import List from "./List";

import styles from './Dialogs.module.scss';

const Dialogs = (props) =>{
    return(
        <div className={styles.dialogs}>
            <List state={props.state.dialogsList}/>
            <Chat state={props.state.messages}/>
        </div>
    )
}
export default Dialogs;

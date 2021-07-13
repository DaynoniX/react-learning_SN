import React from 'react';

import Chat from "./Chat";
import List from "./List";

import styles from './Dialogs.module.scss';

const Dialogs = () =>{
    return(
        <div className={styles.dialogs}>
            <List />
            <Chat />
        </div>
    )
}
export default Dialogs;

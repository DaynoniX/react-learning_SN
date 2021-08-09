import React from 'react';

import List from "./List";

import styles from './Dialogs.module.scss';
import ChatContainer from "./Chat/ChatContainer";
import {connect} from "react-redux";


const mapStateToProps = (state) =>{
    return{
       state: state.dialogsPage.dialogsList
    }
}
let DialogsList = connect(mapStateToProps, null)(List);

const Dialogs = () =>{
    return(
        <div className={styles.dialogs}>
            <DialogsList />
            <ChatContainer />
        </div>
    )
}
export default Dialogs;

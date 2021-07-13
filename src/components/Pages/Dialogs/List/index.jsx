import ListItem from "./ListItem";
import React from "react";

import styles from './List.module.scss'

const List = (props) =>{
    return(
        <div className={styles.dialogsList}>
            <ListItem id='1' name='Name 1' />
            <ListItem id='2' name='Name 2'/>
            <ListItem id='3' name='Name 3'/>
            <ListItem id='4' name='Name 4'/>
            <ListItem id='5' name='Name 5'/>
            <ListItem id='6' name='Name 6'/>
        </div>
    )
}

export default List;

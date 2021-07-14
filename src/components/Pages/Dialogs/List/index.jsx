import ListItem from "./ListItem";
import React from "react";

import styles from './List.module.scss'

const List = (props) =>{
    let dialogList = props.state.map( item => <ListItem id={item.id} name={item.name} />);
    return(
        <div className={styles.dialogsList}>
            { dialogList }
        </div>
    )
}

export default List;

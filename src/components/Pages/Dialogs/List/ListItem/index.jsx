import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./ListItem.module.scss";

const ListItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={styles.item }>
            <NavLink to={path} >{props.name}</NavLink>
        </div>
    )
}
export default ListItem;

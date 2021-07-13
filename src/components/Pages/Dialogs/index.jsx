import React from 'react';

import Message from "./Message";
import ListItem from "./ListItem";


import styles from './Dialogs.module.scss';

const Dialogs = () =>{
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                <ListItem id='1' name='Name 1' />
                <ListItem id='2' name='Name 2'/>
                <ListItem id='3' name='Name 3'/>
                <ListItem id='4' name='Name 4'/>
                <ListItem id='5' name='Name 5'/>
                <ListItem id='6' name='Name 6'/>
            </div>
            <div className={styles.chat}>
                <Message text="lorem" />
                <Message text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium aspernatur commodi dignissimos distinctio dolorum ducimus ea eos fugit magni maxime nemo nesciunt optio perspiciatis praesentium repellat veritatis voluptate voluptatem?" />
            </div>
        </div>
    )
}
export default Dialogs;

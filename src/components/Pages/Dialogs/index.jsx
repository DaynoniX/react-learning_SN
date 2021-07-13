import React from 'react';

import Message from "./Message";

import styles from './Dialogs.module.scss';

const Dialogs = () =>{
    return(
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                <div className={styles.item + ' ' + styles.active}>John</div>
                <div className={styles.item}>Steve</div>
                <div className={styles.item}>Bob</div>
                <div className={styles.item}>Dan</div>
                <div className={styles.item}>Mike</div>
                <div className={styles.item}>Jerry</div>
            </div>
            <div className={styles.chat}>
                <Message text="lorem" />
                <Message text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium aspernatur commodi dignissimos distinctio dolorum ducimus ea eos fugit magni maxime nemo nesciunt optio perspiciatis praesentium repellat veritatis voluptate voluptatem?" />
            </div>
        </div>
    )
}
export default Dialogs;

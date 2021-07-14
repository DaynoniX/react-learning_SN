import React from "react";
import styles from './Info.module.scss';

const Info = (props) => {
    return (
        <div className={styles.info}>
        <div className={styles.avatar}>
            <img src="avtar.png" alt=""/>
        </div>
        <div className={styles.description}>
            <h4>{props.data.name}</h4>
            <p><strong>Birthday date:</strong> {props.data.birthday_date}</p>
            <p><strong>City:</strong> {props.data.city}</p>
            <p><strong>Education:</strong> {props.data.educ}</p>
            <p><strong>Info:</strong> {props.data.descr}</p>
        </div>
    </div>
    )
};

export default Info;

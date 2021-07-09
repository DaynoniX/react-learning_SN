import React, { Fragment } from 'react';
import styles from './Button.module.scss'

const Button = (props) => { // depending on 'type' props - applying a class
    const type = props.type;
    return (
        <button className={`${styles.btn} ${type}`}>{props.text}</button>
    )
}

export default Button;

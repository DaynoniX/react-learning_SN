import React from 'react';
import logo from "../../../assets/logo.png";
import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={`${styles.header} ${'bar'}`}>
            <img src={logo} alt="logo" className={styles.logo}/>
        </header>
    );
}

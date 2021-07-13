import React from 'react';
import {NavLink} from "react-router-dom";

import logo from "../../../assets/logo.png";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={`${styles.header} ${'bar'}`}>
            <NavLink to="/">
                <img src={logo} alt="logo" className={styles.logo}/>
            </NavLink>
        </header>
    );
}

export default Header;

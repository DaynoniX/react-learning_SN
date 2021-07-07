import React from 'react';
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="page-header bar">
            <img src={logo} alt="logo" className="logo"/>
        </header>
    );
}
 export default Header;

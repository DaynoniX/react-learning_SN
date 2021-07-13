import React from 'react';
import {NavLink} from "react-router-dom";
import Button from "../../UI/Button";
import style from './Sidebar.module.scss'

const Navbar = () => {
    return (
        <div className={`${style.sidebar} ${'bar'}`}>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <NavLink to="/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs">
                            Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news">
                            News
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/music">
                            Music
                        </NavLink>
                    </li>
                </ul>
                <Button type={style.button} text={'Settings'}/>
            </nav>
        </div>
    );
}
export default Navbar;

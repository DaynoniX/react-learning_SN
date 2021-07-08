import React from 'react';
import style from './Sidebar.module.scss'
const Navbar = () => {
    return (
        <div className={`${style.sidebar} ${'bar'}`}>
            <nav className={style.nav}>
                <ul>
                    <li>
                        <a href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Messages
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            News
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Music
                        </a>
                    </li>
                </ul>
                <button className="btnDefault">Settings</button>
            </nav>
        </div>
    );
}
export default Navbar;

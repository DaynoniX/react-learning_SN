import React from 'react';
import logo from "../assets/logo.png";
import Header from "./Header";

const Navbar = () => {
    return (
        <div className="sidebar bar">
            <nav>
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
                <button>Settings</button>
            </nav>
        </div>
    );
}
export default Navbar;

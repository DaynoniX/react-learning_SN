import React from 'react';
import logo from '../assets/logo.png'
import './page.scss';



class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <header className="page-header">
                    <img src={logo} alt="logo" className="logo"/>
                </header>
                <div className="sidebar">
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
                <div className="content">
                    <div className="content-wallpaper">

                    </div>
                    <div className="content-info">

                    </div>
                    <div className="content-form">

                    </div>
                    <div className="content-posts">

                    </div>
                </div>
            </div>
        );
    }
}
export default Page;

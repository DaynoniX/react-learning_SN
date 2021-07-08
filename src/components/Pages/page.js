import React from 'react';
import '../../styles/global.scss';
import {Header} from '../Layout/Header';
import Sidebar from "../Layout/Sidebar/Sidebar";
import Profile from "./Profile/Profile";

class Page extends React.Component {
    render() {
        return (
            <div className="page">
                <Header />
                <Sidebar />
                <Profile />
            </div>
        );
    }
}

export default Page;

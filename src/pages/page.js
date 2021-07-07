import React from 'react';
import logo from '../assets/logo.png'
import './page.scss';
import Header from '../uni_components/Header';
import Sidebar from "../uni_components/Sidebar";
import Profile from "../uni_components/Profile";

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

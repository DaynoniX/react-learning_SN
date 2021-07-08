import React from 'react';
import '../styles/global.scss';
import Header from '../global_components/Header/Header';
import Sidebar from "../global_components/Sidebar/Sidebar";
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

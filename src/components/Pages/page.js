import React from 'react';
import '../../styles/global.scss';
import {Header} from '../Layout/Header';
import Sidebar from "../Layout/Sidebar";
import Profile from "./Profile";

const Page = () => {
        return (
            <div className="page">
                <Header />
                <Sidebar />
                <Profile />
            </div>
        );
}

export default Page;

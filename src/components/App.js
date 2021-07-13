import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Header from './Layout/Header';
import Sidebar from "./Layout/Sidebar";
import Profile from "./Pages/Profile";
import Dialogs from "./Pages/Dialogs";
import Settings from "./Pages/Settings";
import News from "./Pages/News";
import Music from "./Pages/Music";
import Home from "./Pages/Home";

import '../styles/global.scss';


const App = () => {
    return (
        <BrowserRouter>
            <div className="page">
                <Header/>
                <Sidebar/>
                <div className="container bar">
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route exact path='/' component={Home}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

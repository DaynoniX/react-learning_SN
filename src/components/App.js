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


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="page">
                <Header/>
                <Sidebar/>
                <div className="container bar">
                    <Route path='/profile'
                           render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route exact path='/'
                           render={() => <Home />}/>
                    <Route path='/music'
                           render={() => <Music /> }/>
                    <Route path='/news'
                           render={() => <News />}/>
                    <Route path='/settings'
                           render={() => <Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

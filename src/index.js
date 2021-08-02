import React from 'react';
import './styles/index.css';

import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./components/App";


let renderWholeDOM = () => {
    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
}

renderWholeDOM(store.getState());
store.subscribe(renderWholeDOM);

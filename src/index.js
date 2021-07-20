import React from 'react';
import './styles/index.css';

import state, {addPost, subscribe, typeText} from "./tmp_state/state";
import ReactDOM from "react-dom";
import App from "./components/App";

let renderWholeDOM = (state) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} typeText={typeText}/>,
        document.getElementById('root')
    );
}

renderWholeDOM(state);
subscribe(renderWholeDOM);

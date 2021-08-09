import React from 'react';
import './styles/index.css';

import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";


let renderWholeDOM = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}

renderWholeDOM(store.getState());
store.subscribe(renderWholeDOM);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/configureStore";
import MainComponent from "./components/Main.js";

ReactDOM.render(
    <Provider store={store}>
        <MainComponent />
    </Provider>,
    document.getElementById("main")
);
import React from 'react'
import { useHistory, withRouter, Redirect, BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App.js";
import Name from "./Name.js";
import Types from "./Types.js";

export default function Routing() {
    return (
        <BrowserRouter>
            <Switch>
                <Route component = {Name} path = "/Name" exact/>
                <Route component = {Types} path = "/Types" exact/>
                <Route component = {App} path = "/" exact/>
            </Switch>
        </BrowserRouter>
    );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Candidate from "./Candidate";
import NewCandidate from "./NewCandidate";
const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/candidates/:id" component={Candidate} />
            <Route path="/newcandidate/" component={NewCandidate} />
        </Switch>
    )
}
export default AppRoutes;
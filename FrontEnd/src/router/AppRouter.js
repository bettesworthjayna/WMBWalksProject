import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Walk from "../pages/Walk";
import Home from "../pages/Home";
import StravaRedirect from "../pages/StravaRedirect";
import YourDistance from "../pages/YourDistance";
import About from '../pages/About'
import Personal from '../pages/ManageTokens';
import Tutorials from "../pages/Tutorials";
import Layout from "../utils/Layout";

class AppRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="main">
                    <Layout>
                    <Switch>
                        <Route path="/" component={Home} exact={true} />
                        <Route path="/redirect" component={StravaRedirect} />
                        <Route path="/yourdistance" component={YourDistance} />
                        <Route path="/about" component={About} />
                        <Route path='/walk' component={Walk} />
                        <Route path='/manageTokens' component={Personal} />
                        <Route path='/tutorials' component={Tutorials} />
                    </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Walk from "../pages/Walk";
import Home from "../pages/Home";
import StravaRedirect from "../pages/StravaRedirect";
import YourDistance from "../pages/YourDistance";
import About from '../pages/About'
import Tutorials from "../pages/Tutorials";
import Layout from "../utils/Layout";
import Admin from '../pages/Admin'


//provides all the url paths. If wanting to add a new page to your website, do this here. 
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
                        <Route path='/tutorials' component={Tutorials} />
                        <Route path='/admin' component={Admin} />
                    </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}
export default AppRouter;

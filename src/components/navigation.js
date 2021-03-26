import React from "react";
import Home from '../Home'
import Timeline from '../timeline'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import '../css/navigation.css'


export default function Navigation() {
    return (
        <Router >

            <header>
            </header>

            <div>

                <div>

                    <Link to="/" className="NavbarIcons" > Add </Link>

                    <Link to="/timeline" className="NavbarIcons" >Show</Link>

                </div>



                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/timeline">
                        <Timeline />
                    </Route>
                   
                </Switch>
            </div>


        </Router>


    );
}

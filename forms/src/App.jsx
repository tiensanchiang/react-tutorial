import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import FormElements from "./FormElements";

export default class App extends React.Component{

    render(){

	return(
	<Router>
	    <div className="container-fluid">
		<div className="row">
		    <div className="col-1">
			<Link to="/elements" className="btn btn-info m-2">Elements</Link>
		    </div>
		    <div className="col">
			<Switch>
			    <Route path="/elements" exact={true} component={FormElements}/>
			</Switch>
		    </div>
		</div>

	    </div>
	</Router>
	)
    }
}

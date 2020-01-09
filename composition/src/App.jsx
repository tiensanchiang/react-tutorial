import React from 'react';
import Main from "./Main";
import {Link,BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';

export default class App extends React.Component{

    render(){
	return(
	    <div className="container-fluid">
		<Router>
		<div className="row">
		    <div className="col-1 text-center p-2">
			<Link to="/main" className="btn btn-primary m-2">
			    Main
			</Link>
		    </div>
		    <div className="col">
			<Switch>
			    <Route path="/main" component={Main} />
			    <Redirect path="/main"/>
			</Switch>
		    </div>
		</div>
		</Router>
	    </div>
	);
    }
}

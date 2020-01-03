import React from "react";
import { AuthContext } from "./AuthContext";

export const authWrapper = (WrappedComponent) =>
    class extends React.Component{
	render = ()=>{
	    return (
		<AuthContext.Consumer>
		{
		    context => <WrappedComponent { ...this.props} {...context } />
		}
		</AuthContext.Consumer>
	    );
	}
    }

import React from "react";
import ActionButton from "./ActionButton";

export default class Message extends React.Component{

    render(){
	console.log(`Render Message Component`);
	return (
	    <div>
		<ActionButton theme="primary" {...this.props} />
		<div id="messageDiv" className="h5 text-center p-2">
		    { this.props.message }
		</div>
	    </div>
	);
    }
}

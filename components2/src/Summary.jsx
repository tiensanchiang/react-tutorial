import React from "react";
//import CallbackButton from "./CallbackButton";
import SimpleButton from "./SimpleButton"

export function Summary(props){
    return (
	<React.Fragment>
	    <td>{ props.index + 1}</td>
	    <td>{ props.name }</td>
	    <td>{ props.name.length }</td>
	    <td>
		<SimpleButton text={`Reverse (${props.name})`}
			      callback={ props.reverseCallback}
			      className="btn btn-warning btm-sm m-1"
			      disabled={false}/>
		<SimpleButton text={`Promote (${props.name})`}
			      callback={ ()=>props.promoteCallback(props.name)}
			      className="btn btn-info btm-sm m-1"
			      disabled={false}/>

	    </td>
	</React.Fragment>
    )
}

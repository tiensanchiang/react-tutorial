import React from "react";
import CallbackButton from "./CallbackButton";

export function Summary(props){
    return (
	<React.Fragment>
	    <td>{ props.index + 1}</td>
	    <td>{ props.name }</td>
	    <td>{ props.name.length }</td>
	    <td>
		{/*
		<button onClick={ props.reverseCallback } className="btn btn-primary btn-sm" >
		    Reverse
		</button>

		<button onClick={ ()=>props.promoteCallback(props.name) }
		    className="btn btn-info btn-sm m-2">
		    Promote
		</button>
		  */}
		<CallbackButton text="Reverse" callback={ props.reverseCallback } disabled={false}/>
		<CallbackButton theme="info"
				text="Promote"
				callback={()=>props.promoteCallback(props.name)}/>
	    </td>
	</React.Fragment>
    )
}

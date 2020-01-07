import React from "react"

export default function SimpleButton(props){
    return (
	<button className={ props.className }
		onClick={ props.callback } disabled={props.disabled}>
	    { props.text }
	</button>
    )
}
